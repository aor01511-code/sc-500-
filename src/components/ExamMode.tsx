import React, { useState, useEffect, useMemo } from 'react';
import confetti from 'canvas-confetti';
import {
  Clock,
  Flag,
  ChevronLeft,
  ChevronRight,
  Send,
  RotateCcw,
  Trophy,
  AlertOctagon,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Pause,
  Play,
  SlidersHorizontal,
  Shuffle,
  CheckSquare,
  Square
} from 'lucide-react';
import { Domain, OptionId, Question, QuestionAttemptStats } from '../types/quiz';
import { ScenarioContent } from './ScenarioContent';

interface ExamModeProps {
  questions: Question[];
  onExitExam: () => void;
  lang: 'ja' | 'en';
  questionStats?: Record<string, QuestionAttemptStats>;
  onRecordExamAttempts?: (results: Array<{ questionId: string; isCorrect: boolean }>) => void;
}

type ExamPhase = 'setup' | 'active' | 'submitted';
type CountPreset = 20 | 40 | 60 | 'ALL';
type SourceScope = 'ALL' | 'pdf' | 'core' | 'sakitoo';

const isExactAnswerMatch = (q: Question, picked?: OptionId[]): boolean => {
  const correctIds = q.options
    .filter((o) => o.isCorrect)
    .map((o) => o.id)
    .sort();
  const userIds = [...(picked || [])].sort();
  return (
    correctIds.length > 0 &&
    correctIds.length === userIds.length &&
    correctIds.every((id, idx) => id === userIds[idx])
  );
};

export const ExamMode: React.FC<ExamModeProps> = ({
  questions,
  onExitExam,
  lang,
  questionStats,
  onRecordExamAttempts,
}) => {
  // Setup state
  const [phase, setPhase] = useState<ExamPhase>('setup');
  const [countPreset, setCountPreset] = useState<CountPreset>(40);
  const [sourceScope, setSourceScope] = useState<SourceScope>('ALL');
  const [domainScope, setDomainScope] = useState<Domain | 'ALL'>('ALL');
  const [shuffleOrder, setShuffleOrder] = useState<boolean>(true);

  // Active exam state
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, OptionId[]>>({});
  const [flagged, setFlagged] = useState<Record<string, boolean>>({});
  const [totalDurationSeconds, setTotalDurationSeconds] = useState(60 * 60);
  const [timeLeft, setTimeLeft] = useState(60 * 60);
  const [isPaused, setIsPaused] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [examStartTime, setExamStartTime] = useState<number>(Date.now());
  const [timeSpent, setTimeSpent] = useState(0);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'incorrect'>('all');

  const domains = useMemo(() => {
    const set = new Set<Domain>();
    questions.forEach((q) => set.add(q.domain));
    return Array.from(set);
  }, [questions]);

  const eligiblePool = useMemo(() => {
    return questions.filter((q) => {
      if (sourceScope !== 'ALL' && (q.source || 'core') !== sourceScope) return false;
      if (domainScope !== 'ALL' && q.domain !== domainScope) return false;
      return true;
    });
  }, [questions, sourceScope, domainScope]);

  const plannedCount =
    countPreset === 'ALL' ? eligiblePool.length : Math.min(countPreset, eligiblePool.length);
  const plannedMinutes = Math.max(15, Math.round(plannedCount * 1.5));

  const startExam = () => {
    if (eligiblePool.length === 0) return;
    const pool = [...eligiblePool];
    if (shuffleOrder) {
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }
    }
    const selected = countPreset === 'ALL' ? pool : pool.slice(0, countPreset);
    const durationSec = Math.max(15, Math.round(selected.length * 1.5)) * 60;

    setExamQuestions(selected);
    setAnswers({});
    setFlagged({});
    setCurrentIdx(0);
    setTotalDurationSeconds(durationSec);
    setTimeLeft(durationSec);
    setIsPaused(false);
    setShowSubmitModal(false);
    setExamStartTime(Date.now());
    setTimeSpent(0);
    setReviewFilter('all');
    setPhase('active');
  };

  // Timer countdown
  useEffect(() => {
    if (phase !== 'active' || isPaused) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [phase, isPaused, examQuestions, answers]);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hrs > 0) {
      return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentQ = examQuestions[currentIdx];
  const currentReqCount = currentQ
    ? currentQ.requiredSelections ?? Math.max(1, currentQ.options.filter((o) => o.isCorrect).length)
    : 1;
  const currentIsMulti = currentReqCount > 1;
  const isFlagged = currentQ ? !!flagged[currentQ.id] : false;

  const handleSelectOption = (optionId: OptionId) => {
    if (phase !== 'active' || !currentQ) return;

    setAnswers((prev) => {
      if (!currentIsMulti) {
        return {
          ...prev,
          [currentQ.id]: [optionId],
        };
      }

      const existing = prev[currentQ.id] || [];
      let next: OptionId[];
      if (existing.includes(optionId)) {
        next = existing.filter((id) => id !== optionId);
      } else if (existing.length < currentReqCount) {
        next = [...existing, optionId];
      } else {
        next = [...existing.slice(1), optionId];
      }

      if (next.length === 0) {
        const copy = { ...prev };
        delete copy[currentQ.id];
        return copy;
      }

      return {
        ...prev,
        [currentQ.id]: next,
      };
    });
  };

  const toggleFlag = () => {
    if (!currentQ) return;
    setFlagged((prev) => ({
      ...prev,
      [currentQ.id]: !prev[currentQ.id],
    }));
  };

  const answeredCount = useMemo(() => {
    return examQuestions.filter((q) => {
      const req = q.requiredSelections ?? Math.max(1, q.options.filter((o) => o.isCorrect).length);
      return (answers[q.id]?.length ?? 0) >= req;
    }).length;
  }, [examQuestions, answers]);

  const handleSubmitExam = () => {
    setShowSubmitModal(false);
    setPhase('submitted');
    const spent = Math.floor((Date.now() - examStartTime) / 1000);
    setTimeSpent(spent);

    let correct = 0;
    const attemptUpdates: Array<{ questionId: string; isCorrect: boolean }> = [];
    examQuestions.forEach((q) => {
      const picked = answers[q.id];
      const matched = isExactAnswerMatch(q, picked);
      if (matched) {
        correct += 1;
      }
      if (picked && picked.length > 0) {
        attemptUpdates.push({ questionId: q.id, isCorrect: matched });
      }
    });

    if (onRecordExamAttempts && attemptUpdates.length > 0) {
      onRecordExamAttempts(attemptUpdates);
    }

    const scorePct = examQuestions.length > 0 ? Math.round((correct / examQuestions.length) * 100) : 0;
    if (scorePct >= 70) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  const results = useMemo(() => {
    if (phase !== 'submitted') return null;
    let correct = 0;
    const domainStats: Record<string, { correct: number; total: number }> = {};

    examQuestions.forEach((q) => {
      if (!domainStats[q.domain]) {
        domainStats[q.domain] = { correct: 0, total: 0 };
      }
      domainStats[q.domain].total += 1;

      if (isExactAnswerMatch(q, answers[q.id])) {
        correct += 1;
        domainStats[q.domain].correct += 1;
      }
    });

    const total = examQuestions.length || 1;
    const percentage = Math.round((correct / total) * 100);
    const scaledScore = Math.round((correct / total) * 1000);
    const isPass = scaledScore >= 700;

    return { correct, percentage, scaledScore, isPass, domainStats };
  }, [phase, examQuestions, answers]);

  // Setup Phase
  if (phase === 'setup') {
    return (
      <div className="max-w-3xl mx-auto space-y-6 pb-12">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 md:p-8 space-y-6">
          <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-600/20">
                <SlidersHorizontal className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-slate-900">模擬試験の設定</h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  出題数・対象範囲・タイマーを設定して本番形式でテストします（合格ライン: 700 / 1000点）
                </p>
              </div>
            </div>
            <button
              onClick={onExitExam}
              className="px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
            >
              学習モードへ戻る
            </button>
          </div>

          {/* Source Scope */}
          <div className="space-y-2.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              出題ソース
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {[
                { id: 'ALL' as SourceScope, label: `全問題 (${questions.length}問)` },
                {
                  id: 'pdf' as SourceScope,
                  label: `PDF問題集 (${questions.filter((q) => q.source === 'pdf').length}問)`,
                },
                {
                  id: 'sakitoo' as SourceScope,
                  label: `Web問題集 (${questions.filter((q) => q.source === 'sakitoo').length}問)`,
                },
                {
                  id: 'core' as SourceScope,
                  label: `基礎シナリオ (${questions.filter((q) => (q.source || 'core') === 'core').length}問)`,
                },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSourceScope(item.id)}
                  className={`py-2.5 px-4 rounded-xl border text-xs font-bold transition-all ${
                    sourceScope === item.id
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Domain Scope */}
          <div className="space-y-2.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              対象分野
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setDomainScope('ALL')}
                className={`px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                  domainScope === 'ALL'
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
              >
                全分野
              </button>
              {domains.map((dom) => (
                <button
                  key={dom}
                  onClick={() => setDomainScope(dom)}
                  className={`px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                    domainScope === dom
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {dom}
                </button>
              ))}
            </div>
          </div>

          {/* Question Count */}
          <div className="space-y-2.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              出題数（利用可能プール: {eligiblePool.length} 問）
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {([20, 40, 60, 'ALL'] as CountPreset[]).map((preset) => (
                <button
                  key={String(preset)}
                  onClick={() => setCountPreset(preset)}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all ${
                    countPreset === preset
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {preset === 'ALL'
                    ? `全問 (${eligiblePool.length})`
                    : preset === 40
                    ? '40問 (本番想定)'
                    : `${preset}問`}
                </button>
              ))}
            </div>
          </div>

          {/* Shuffle Toggle */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center space-x-3">
              <Shuffle className="w-4 h-4 text-indigo-600" />
              <div>
                <p className="text-xs font-bold text-slate-800">出題順をシャッフルする</p>
                <p className="text-[11px] text-slate-500">
                  ランダム順で実力を測定します（OFFの場合は問題番号順）
                </p>
              </div>
            </div>
            <button
              onClick={() => setShuffleOrder((prev) => !prev)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                shuffleOrder
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              {shuffleOrder ? 'ON' : 'OFF'}
            </button>
          </div>

          {/* Summary & Start CTA */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-100">
            <div className="text-xs text-slate-600 space-y-0.5">
              <p>
                出題数: <strong className="text-slate-900">{plannedCount} 問</strong> ／ 制限時間:{' '}
                <strong className="text-slate-900">{plannedMinutes} 分</strong>
              </p>
              <p className="text-[11px] text-slate-400">
                複数選択問題（2つ選択）は完全一致で採点されます。
              </p>
            </div>
            <button
              disabled={eligiblePool.length === 0}
              onClick={startExam}
              className="flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white font-bold text-sm shadow-md shadow-indigo-600/20 transition-all"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>模擬試験を開始する</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Submitted Phase
  if (phase === 'submitted' && results) {
    const displayedReviewQuestions =
      reviewFilter === 'incorrect'
        ? examQuestions.filter((q) => !isExactAnswerMatch(q, answers[q.id]))
        : examQuestions;

    return (
      <div className="max-w-4xl mx-auto space-y-8 pb-16">
        {/* Result Card */}
        <div
          className={`rounded-3xl border p-8 md:p-10 text-center shadow-lg relative overflow-hidden ${
            results.isPass
              ? 'bg-linear-to-b from-emerald-50 via-white to-teal-50 border-emerald-200'
              : 'bg-linear-to-b from-rose-50 via-white to-amber-50 border-rose-200'
          }`}
        >
          {results.isPass ? (
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-5 shadow-inner">
              <Trophy className="w-10 h-10" />
            </div>
          ) : (
            <div className="w-20 h-20 bg-rose-100 text-rose-600 rounded-3xl flex items-center justify-center mx-auto mb-5 shadow-inner">
              <AlertOctagon className="w-10 h-10" />
            </div>
          )}

          <span
            className={`px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest inline-block mb-3 ${
              results.isPass ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
            }`}
          >
            {results.isPass ? '合格 (PASSED)' : '不合格 (FAILED)'}
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
            {results.isPass
              ? 'おめでとうございます！合格ラインを突破しました'
              : '惜しい結果となりました。弱点を補強しましょう'}
          </h2>
          <p className="text-sm text-slate-600 max-w-lg mx-auto mb-6">
            Microsoft 認定試験基準 (合格スコア: 700点 / 1000点満点) による換算スコアです。
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
            <div className="bg-white/80 p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
              <span className="text-xs text-slate-500 font-medium block">獲得スコア</span>
              <span className="text-2xl md:text-3xl font-extrabold text-slate-900">
                {results.scaledScore}
              </span>
              <span className="text-[11px] text-slate-400 block">/ 1000 点</span>
            </div>

            <div className="bg-white/80 p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
              <span className="text-xs text-slate-500 font-medium block">正解率</span>
              <span className="text-2xl md:text-3xl font-extrabold text-slate-900">
                {results.percentage}%
              </span>
              <span className="text-[11px] text-slate-400 block">基準: 70%以上</span>
            </div>

            <div className="bg-white/80 p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
              <span className="text-xs text-slate-500 font-medium block">正解数</span>
              <span className="text-2xl md:text-3xl font-extrabold text-slate-900">
                {results.correct}
              </span>
              <span className="text-[11px] text-slate-400 block">/ {examQuestions.length} 問</span>
            </div>

            <div className="bg-white/80 p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
              <span className="text-xs text-slate-500 font-medium block">所要時間</span>
              <span className="text-2xl md:text-3xl font-extrabold text-slate-900">
                {formatTime(timeSpent)}
              </span>
              <span className="text-[11px] text-slate-400 block">
                制限: {formatTime(totalDurationSeconds)}
              </span>
            </div>
          </div>

          {/* Domain Breakdown */}
          <div className="bg-white/90 rounded-2xl p-6 border border-slate-200/80 text-left max-w-2xl mx-auto space-y-3 mb-8">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              分野別スコア分析 (Domain Performance)
            </h4>
            {Object.entries(results.domainStats).map(([dom, stat]) => {
              const domPct = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;
              return (
                <div key={dom} className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold text-slate-700">
                    <span>{dom}</span>
                    <span>
                      {stat.correct} / {stat.total} 問 ({domPct}%)
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        domPct >= 70 ? 'bg-emerald-500' : domPct >= 50 ? 'bg-amber-500' : 'bg-rose-500'
                      }`}
                      style={{ width: `${domPct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setPhase('setup')}
              className="flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>条件を変えて再受験</span>
            </button>
            <button
              onClick={() => {
                setAnswers({});
                setFlagged({});
                setTimeLeft(totalDurationSeconds);
                setCurrentIdx(0);
                setExamStartTime(Date.now());
                setPhase('active');
              }}
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl border border-indigo-200 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-sm transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>同じ問題でやり直す</span>
            </button>
            <button
              onClick={onExitExam}
              className="px-6 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-colors shadow-2xs"
            >
              学習モードに戻る
            </button>
          </div>
        </div>

        {/* Detailed Review Section */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-xl font-bold text-slate-900">解答と詳細解説の確認</h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setReviewFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  reviewFilter === 'all'
                    ? 'bg-slate-900 text-white'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                全問 ({examQuestions.length})
              </button>
              <button
                onClick={() => setReviewFilter('incorrect')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  reviewFilter === 'incorrect'
                    ? 'bg-rose-600 text-white'
                    : 'bg-rose-50 border border-rose-200 text-rose-700 hover:bg-rose-100'
                }`}
              >
                不正解・未回答のみ ({examQuestions.length - results.correct})
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {displayedReviewQuestions.map((q) => {
              const userPicks = answers[q.id] || [];
              const correctIds = q.options.filter((o) => o.isCorrect).map((o) => o.id);
              const isUserCorrect = isExactAnswerMatch(q, userPicks);

              return (
                <div
                  key={q.id}
                  className={`rounded-2xl border p-6 bg-white shadow-xs transition-all ${
                    isUserCorrect
                      ? 'border-emerald-200/80 bg-emerald-50/10'
                      : 'border-rose-200/80 bg-rose-50/10'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-slate-800 text-white">
                        第 {q.number} 問
                      </span>
                      <span className="text-xs font-medium text-slate-500">{q.domain}</span>
                      {questionStats && questionStats[q.id] && (
                        <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-600 border border-slate-200">
                          取組 {questionStats[q.id].attempts}回 / 正解 {questionStats[q.id].corrects}回
                        </span>
                      )}
                    </div>

                    <div className="flex items-center space-x-2">
                      {isUserCorrect ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                          <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                          正解
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 text-rose-800 border border-rose-300">
                          <XCircle className="w-3.5 h-3.5 mr-1 text-rose-600" />
                          {userPicks.length > 0
                            ? `不正解 (選択: ${[...userPicks].sort().join(', ')} / 正解: ${correctIds.join(', ')})`
                            : `未回答 (正解: ${correctIds.join(', ')})`}
                        </span>
                      )}
                    </div>
                  </div>

                  <h4 className="font-bold text-slate-900 text-base mb-2">
                    {lang === 'ja' ? q.titleJa : q.titleEn}
                  </h4>
                  <div className="text-sm text-slate-700 mb-4 bg-slate-50 p-4 rounded-xl border border-slate-200/60 overflow-x-auto">
                    <ScenarioContent content={lang === 'ja' ? q.scenarioJa : q.scenarioEn} />
                  </div>

                  <div className="space-y-2 mb-4">
                    {q.options.map((opt) => {
                      const pickedThis = userPicks.includes(opt.id);
                      return (
                        <div
                          key={opt.id}
                          className={`p-3 rounded-xl border text-xs md:text-sm flex items-start space-x-3 ${
                            opt.isCorrect
                              ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-semibold'
                              : pickedThis
                              ? 'bg-rose-50 border-rose-300 text-rose-950'
                              : 'bg-white border-slate-200 text-slate-600'
                          }`}
                        >
                          <span className="w-5 h-5 rounded-md border flex items-center justify-center shrink-0 text-xs font-bold">
                            {opt.id}
                          </span>
                          <div className="flex-1">
                            <p>{lang === 'ja' ? opt.textJa : opt.textEn}</p>
                            <p className="mt-1 font-normal text-xs text-slate-500">
                              {lang === 'ja' ? opt.explanationJa : opt.explanationEn}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-100 text-xs text-slate-700 space-y-1.5">
                    <span className="font-bold text-indigo-900 block">全体解説:</span>
                    <p className="leading-relaxed whitespace-pre-line">
                      {lang === 'ja' ? q.overallExplanationJa : q.overallExplanationEn}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Active Exam View
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Top Exam Header with Timer & Palette Toggle */}
      <div className="bg-slate-900 text-white rounded-3xl p-5 shadow-lg flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-extrabold text-base tracking-tight">SC-500 模擬試験セッション</h2>
            <p className="text-xs text-slate-400">
              進捗: {answeredCount} / {examQuestions.length} 問 回答済み
            </p>
          </div>
        </div>

        {/* Timer Box */}
        <div className="flex items-center space-x-3">
          <div
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl border text-sm font-bold font-mono tracking-wider ${
              timeLeft < 300
                ? 'bg-rose-500/20 border-rose-500/50 text-rose-300 animate-pulse'
                : 'bg-slate-800 border-slate-700 text-amber-300'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>{formatTime(timeLeft)}</span>
          </div>

          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            title={isPaused ? '再開' : '一時停止'}
          >
            {isPaused ? <Play className="w-4 h-4 text-emerald-400" /> : <Pause className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setShowSubmitModal(true)}
            className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
            <span>試験終了・採点</span>
          </button>
        </div>
      </div>

      {/* Main question matrix and current question layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left/Main Question Card */}
        <div className="lg:col-span-3 space-y-6">
          {currentQ && (
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 md:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-lg text-xs font-bold bg-slate-900 text-white">
                    {currentIdx + 1} / {examQuestions.length} (第{currentQ.number}問)
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-blue-50 text-blue-700">
                    {currentQ.domain}
                  </span>
                  {currentIsMulti && (
                    <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                      {currentReqCount}つ選択
                    </span>
                  )}
                </div>

                <button
                  onClick={toggleFlag}
                  className={`flex items-center space-x-1 px-3 py-1 rounded-lg text-xs font-semibold border transition-colors ${
                    isFlagged
                      ? 'bg-amber-500 text-white border-amber-500'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Flag className={`w-3.5 h-3.5 ${isFlagged ? 'fill-current' : ''}`} />
                  <span>{isFlagged ? '要見直しマーク中' : '後で見直す'}</span>
                </button>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-slate-900">
                {lang === 'ja' ? currentQ.titleJa : currentQ.titleEn}
              </h3>

              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/70 text-slate-800 text-sm md:text-base leading-relaxed font-normal overflow-x-auto">
                <ScenarioContent content={lang === 'ja' ? currentQ.scenarioJa : currentQ.scenarioEn} />
              </div>

              <div className="flex items-start space-x-2 text-slate-900 font-bold text-sm md:text-base">
                <HelpCircle className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <span>{lang === 'ja' ? currentQ.questionJa : currentQ.questionEn}</span>
                  {currentIsMulti && (
                    <p className="text-xs font-semibold text-amber-700 mt-1">
                      ※ {currentReqCount}つ選択してください（現在{' '}
                      {answers[currentQ.id]?.length ?? 0}/{currentReqCount}）
                    </p>
                  )}
                </div>
              </div>

              {/* Options */}
              <div className="space-y-3 pt-2">
                {currentQ.options.map((opt) => {
                  const isSelected = (answers[currentQ.id] || []).includes(opt.id);
                  return (
                    <div
                      key={opt.id}
                      onClick={() => handleSelectOption(opt.id)}
                      className={`p-4 rounded-2xl border text-sm md:text-base cursor-pointer transition-all flex items-start space-x-3.5 ${
                        isSelected
                          ? 'border-indigo-600 bg-indigo-50/50 text-indigo-950 ring-2 ring-indigo-500/20'
                          : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50 text-slate-800'
                      }`}
                    >
                      <div className="flex items-center space-x-2 shrink-0 mt-0.5">
                        {currentIsMulti && (
                          <span className={isSelected ? 'text-indigo-600' : 'text-slate-400'}>
                            {isSelected ? (
                              <CheckSquare className="w-4 h-4" />
                            ) : (
                              <Square className="w-4 h-4" />
                            )}
                          </span>
                        )}
                        <span
                          className={`w-7 h-7 rounded-lg border text-xs font-bold flex items-center justify-center ${
                            isSelected
                              ? 'bg-indigo-600 text-white border-indigo-600'
                              : 'bg-slate-100 text-slate-600 border-slate-200'
                          }`}
                        >
                          {opt.id}
                        </span>
                      </div>
                      <span className="font-medium">
                        {lang === 'ja' ? opt.textJa : opt.textEn}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <button
                  disabled={currentIdx === 0}
                  onClick={() => setCurrentIdx((i) => Math.max(0, i - 1))}
                  className="flex items-center space-x-1 px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-semibold text-slate-700"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>前の問題</span>
                </button>

                {currentIdx < examQuestions.length - 1 ? (
                  <button
                    onClick={() => setCurrentIdx((i) => Math.min(examQuestions.length - 1, i + 1))}
                    className="flex items-center space-x-1 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs"
                  >
                    <span>次の問題</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => setShowSubmitModal(true)}
                    className="flex items-center space-x-1 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-xs"
                  >
                    <span>試験を提出</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Right Palette / Matrix */}
        <div className="space-y-4">
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-5 space-y-4">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              問題パレット ({examQuestions.length} 問)
            </h4>

            <div className="grid grid-cols-5 gap-1.5 max-h-80 overflow-y-auto pr-1">
              {examQuestions.map((q, idx) => {
                const req =
                  q.requiredSelections ?? Math.max(1, q.options.filter((o) => o.isCorrect).length);
                const pickLen = answers[q.id]?.length ?? 0;
                const flg = flagged[q.id];
                const isCurrent = idx === currentIdx;

                let btnStyle = 'bg-slate-100 text-slate-700 hover:bg-slate-200';
                if (flg) {
                  btnStyle = 'bg-amber-400 text-white';
                } else if (pickLen >= req) {
                  btnStyle = 'bg-indigo-600 text-white';
                } else if (pickLen > 0) {
                  btnStyle = 'bg-indigo-100 text-indigo-800 border border-indigo-300';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIdx(idx)}
                    className={`h-8 rounded-lg text-xs font-bold transition-all relative ${btnStyle} ${
                      isCurrent ? 'ring-2 ring-slate-900 ring-offset-1' : ''
                    }`}
                  >
                    {idx + 1}
                    {flg && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-amber-500 rounded-full border border-white" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 space-y-1.5">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-md bg-indigo-600" />
                <span>回答済み ({answeredCount})</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-md bg-slate-200" />
                <span>未回答 ({examQuestions.length - answeredCount})</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-md bg-amber-400" />
                <span>要見直しフラグ ({Object.values(flagged).filter(Boolean).length})</span>
              </div>
            </div>

            <button
              onClick={() => setShowSubmitModal(true)}
              className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors"
            >
              試験を提出して採点する
            </button>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-slate-900">模擬試験を終了しますか？</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              全 {examQuestions.length} 問中、<strong>{answeredCount} 問</strong>に回答しています。
              {examQuestions.length - answeredCount > 0 && (
                <span className="text-rose-600 block mt-1 font-semibold">
                  ※ 未回答（または選択不足）の問題が {examQuestions.length - answeredCount} 問残っています。
                </span>
              )}
            </p>

            <div className="flex items-center justify-end space-x-2 pt-2">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                試験に戻る
              </button>
              <button
                onClick={handleSubmitExam}
                className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md"
              >
                提出して採点する
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
