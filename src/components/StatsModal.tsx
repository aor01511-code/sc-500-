import React, { useState } from 'react';
import { X, Award, RotateCcw, CheckCircle2, XCircle, BookOpen, AlertTriangle } from 'lucide-react';
import { Domain, Question, QuestionAttemptStats, RoundSummary, UserAnswerRecord } from '../types/quiz';

interface StatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
  userRecords: Record<string, UserAnswerRecord>;
  questionStats: Record<string, QuestionAttemptStats>;
  bookmarkedIds: string[];
  studyRound: number;
  roundHistory: RoundSummary[];
  onStartNextRound: () => void;
  onResetAllProgress: () => void;
}

export const StatsModal: React.FC<StatsModalProps> = ({
  isOpen,
  onClose,
  questions,
  userRecords,
  questionStats,
  bookmarkedIds,
  studyRound,
  roundHistory,
  onStartNextRound,
  onResetAllProgress,
}) => {
  const [confirmMode, setConfirmMode] = useState<'none' | 'next_round' | 'full_reset'>('none');

  if (!isOpen) return null;

  const totalQuestions = questions.length;
  const answeredCount = Object.keys(userRecords).length;
  const correctCount = Object.values(userRecords).filter((r) => r.isCorrect).length;
  const incorrectCount = answeredCount - correctCount;
  const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
  const coverage = Math.round((answeredCount / totalQuestions) * 100);

  const totalAttempts = Object.values(questionStats).reduce((sum, s) => sum + s.attempts, 0);
  const totalCorrectAttempts = Object.values(questionStats).reduce((sum, s) => sum + s.corrects, 0);
  const cumulativeAccuracy =
    totalAttempts > 0 ? Math.round((totalCorrectAttempts / totalAttempts) * 100) : 0;

  // Group by domain
  const domains: Domain[] = [
    'Defender XDR & 統合SecOps',
    'Entra ID & CIEM',
    'Purview & コンプライアンス監査',
    'Sentinel & セキュリティ運用',
    'Defender for Cloud & クラウド態勢',
    'AI セキュリティ & Copilot',
  ];

  const domainStats = domains.map((domain) => {
    const domainQuestions = questions.filter((q) => q.domain === domain);
    const total = domainQuestions.length;
    let answered = 0;
    let correct = 0;
    let cumAttempts = 0;
    let cumCorrects = 0;

    domainQuestions.forEach((q) => {
      const rec = userRecords[q.id];
      if (rec) {
        answered += 1;
        if (rec.isCorrect) correct += 1;
      }
      const st = questionStats[q.id];
      if (st) {
        cumAttempts += st.attempts;
        cumCorrects += st.corrects;
      }
    });

    const domainAcc = answered > 0 ? Math.round((correct / answered) * 100) : 0;
    return { domain, total, answered, correct, domainAcc, cumAttempts, cumCorrects };
  });

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl space-y-6 relative border border-slate-200">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-xl font-bold text-slate-900">学習進捗と習熟度分析</h3>
              <span className="px-2 py-0.5 rounded-md bg-indigo-600 text-white text-xs font-bold">
                現在 {studyRound}周目
              </span>
            </div>
            <p className="text-xs text-slate-500">
              SC-500 対策の回答履歴・正解率サマリー（ブックマーク: {bookmarkedIds.length}件）
            </p>
          </div>
        </div>

        {/* Cumulative Lifetime Stats */}
        <div className="bg-indigo-50/70 border border-indigo-200/80 rounded-2xl p-4 space-y-2.5">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-indigo-900">
              累計の取り組み実績（全周回・やり直し・模試含む）
            </h4>
            <span className="text-xs font-extrabold text-indigo-700">
              累計正解率 {cumulativeAccuracy}%
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2.5">
            <div className="bg-white/90 rounded-xl px-3 py-2.5 border border-indigo-100">
              <span className="text-[11px] text-slate-500 block">総取組回数</span>
              <span className="text-lg font-extrabold text-slate-900">{totalAttempts} 回</span>
            </div>
            <div className="bg-white/90 rounded-xl px-3 py-2.5 border border-indigo-100">
              <span className="text-[11px] text-emerald-700 block">総正解回数</span>
              <span className="text-lg font-extrabold text-emerald-700">
                {totalCorrectAttempts} 回
              </span>
            </div>
            <div className="bg-white/90 rounded-xl px-3 py-2.5 border border-indigo-100">
              <span className="text-[11px] text-rose-700 block">総誤答回数</span>
              <span className="text-lg font-extrabold text-rose-600">
                {Math.max(0, totalAttempts - totalCorrectAttempts)} 回
              </span>
            </div>
          </div>
        </div>

        {/* Overview Stats Grid */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            現在の周回（{studyRound}周目）
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
              <span className="text-[11px] text-slate-500 block">総合正解率</span>
              <span className="text-2xl font-extrabold text-blue-600">{accuracy}%</span>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
              <span className="text-[11px] text-slate-500 block">消化率</span>
              <span className="text-2xl font-extrabold text-slate-900">
                {coverage}%
              </span>
              <span className="text-[10px] text-slate-400 block">{answeredCount}/{totalQuestions} 問</span>
            </div>

            <div className="bg-emerald-50/80 p-4 rounded-2xl border border-emerald-200/80">
              <span className="text-[11px] text-emerald-800 block">正解数</span>
              <span className="text-2xl font-extrabold text-emerald-700">{correctCount}</span>
            </div>

            <div className="bg-rose-50/80 p-4 rounded-2xl border border-rose-200/80">
              <span className="text-[11px] text-rose-800 block">要復習 (誤答)</span>
              <span className="text-2xl font-extrabold text-rose-700">{incorrectCount}</span>
            </div>
          </div>
        </div>

        {/* Domain Mastery Bars */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            分野別習熟度 (Domain Mastery)
          </h4>

          <div className="space-y-3">
            {domainStats.map((ds) => (
              <div key={ds.domain} className="space-y-1">
                <div className="flex flex-wrap justify-between gap-2 text-xs font-medium text-slate-700">
                  <span>{ds.domain}</span>
                  <span className="font-semibold text-slate-900">
                    {ds.correct} / {ds.total} 正解 ({ds.domainAcc}%)
                    <span className="ml-2 text-[11px] font-normal text-slate-500">
                      [累計: 取組{ds.cumAttempts}回・正解{ds.cumCorrects}回]
                    </span>
                  </span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      ds.domainAcc >= 70
                        ? 'bg-emerald-500'
                        : ds.domainAcc >= 40
                        ? 'bg-amber-500'
                        : 'bg-blue-600'
                    }`}
                    style={{ width: `${ds.total > 0 ? (ds.correct / ds.total) * 100 : 0}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Previous Rounds History */}
        {roundHistory.length > 0 && (
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              これまでの周回記録
            </h4>
            <div className="flex flex-wrap gap-2">
              {roundHistory.map((item) => (
                <div
                  key={`${item.round}-${item.finishedAt}`}
                  className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center space-x-2"
                >
                  <span className="font-bold text-indigo-700">{item.round}周目</span>
                  <span className="text-slate-400">|</span>
                  <span>
                    {item.correctCount}/{item.answeredCount} 正解 ({item.accuracy}%)
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reset Actions */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          {confirmMode === 'none' ? (
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setConfirmMode('next_round')}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-xs text-indigo-700 font-bold transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>すべてをやり直す（{studyRound + 1}周目へ）</span>
              </button>
              <button
                onClick={() => setConfirmMode('full_reset')}
                className="text-xs text-rose-600 hover:text-rose-700 font-semibold cursor-pointer"
              >
                1周目から完全リセット
              </button>
            </div>
          ) : confirmMode === 'next_round' ? (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-indigo-700 font-bold">
                回答をリセットして {studyRound + 1}周目を開始しますか？（ブックマークは保持）
              </span>
              <button
                onClick={() => {
                  onStartNextRound();
                  setConfirmMode('none');
                  onClose();
                }}
                className="px-2.5 py-1 rounded-lg bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 cursor-pointer"
              >
                {studyRound + 1}周目を開始
              </button>
              <button
                onClick={() => setConfirmMode('none')}
                className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium hover:bg-slate-200 cursor-pointer"
              >
                キャンセル
              </button>
            </div>
          ) : (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-rose-600 font-bold">
                周回数・ブックマークも含めて完全に初期化しますか？
              </span>
              <button
                onClick={() => {
                  onResetAllProgress();
                  setConfirmMode('none');
                }}
                className="px-2.5 py-1 rounded-lg bg-rose-600 text-white text-xs font-bold hover:bg-rose-700 cursor-pointer"
              >
                はい
              </button>
              <button
                onClick={() => setConfirmMode('none')}
                className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium hover:bg-slate-200 cursor-pointer"
              >
                キャンセル
              </button>
            </div>
          )}

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 transition-colors shadow-2xs cursor-pointer"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
};
