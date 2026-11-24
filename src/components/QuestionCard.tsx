import React, { useState, useEffect } from 'react';
import {
  Bookmark,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Lightbulb,
  ExternalLink,
  RotateCcw,
  Languages,
  BookOpenCheck,
  ChevronLeft,
  ChevronRight,
  CheckSquare,
  Square,
  History
} from 'lucide-react';
import { OptionId, Question, QuestionAttemptStats, UserAnswerRecord } from '../types/quiz';
import { ScenarioContent } from './ScenarioContent';

interface QuestionCardProps {
  question: Question;
  userRecord?: UserAnswerRecord;
  isBookmarked: boolean;
  onSelectOption: (selectedOptionIds: OptionId[]) => void;
  onResetQuestion: () => void;
  onToggleBookmark: () => void;
  lang: 'ja' | 'en';
  onPrev?: () => void;
  onNext?: () => void;
  currentIndex?: number;
  totalFilteredCount?: number;
  studyRound?: number;
  attemptStats?: QuestionAttemptStats;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  userRecord,
  isBookmarked,
  onSelectOption,
  onResetQuestion,
  onToggleBookmark,
  lang: globalLang,
  onPrev,
  onNext,
  currentIndex,
  totalFilteredCount,
  studyRound,
  attemptStats,
}) => {
  const [localLangOverride, setLocalLangOverride] = useState<'ja' | 'en' | null>(null);
  const [pendingSelections, setPendingSelections] = useState<OptionId[]>([]);
  const currentLang = localLangOverride || globalLang;

  useEffect(() => {
    setPendingSelections([]);
  }, [question.id]);

  const correctOptionIds = question.options.filter((o) => o.isCorrect).map((o) => o.id);
  const requiredSelections = question.requiredSelections ?? Math.max(1, correctOptionIds.length);
  const isMultiSelect = requiredSelections > 1;

  const isAnswered = !!userRecord;
  const isCorrect = userRecord?.isCorrect;
  const recordedIds: OptionId[] =
    userRecord?.selectedOptionIds ??
    (userRecord?.selectedOptionId ? [userRecord.selectedOptionId] : []);

  const toggleLocalLang = () => {
    setLocalLangOverride((prev) => {
      const active = prev || globalLang;
      return active === 'ja' ? 'en' : 'ja';
    });
  };

  const handleOptionClick = (optionId: OptionId) => {
    if (isAnswered) return;

    if (!isMultiSelect) {
      onSelectOption([optionId]);
      return;
    }

    setPendingSelections((prev) => {
      if (prev.includes(optionId)) {
        return prev.filter((id) => id !== optionId);
      }
      if (prev.length < requiredSelections) {
        return [...prev, optionId];
      }
      return [...prev.slice(1), optionId];
    });
  };

  const handleConfirmMultiSelect = () => {
    if (isAnswered || pendingSelections.length !== requiredSelections) return;
    onSelectOption(pendingSelections);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden transition-all mb-6">
      {/* Top Header Bar */}
      <div className="bg-slate-50/80 px-6 py-4 border-b border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-lg text-xs font-bold bg-slate-900 text-white shadow-2xs">
            第 {question.number} 問
          </span>
          {studyRound !== undefined && (
            <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-indigo-600 text-white shadow-2xs">
              {studyRound}周目
            </span>
          )}
          {(() => {
            const attempts = attemptStats?.attempts ?? (userRecord ? 1 : 0);
            const corrects = attemptStats?.corrects ?? (userRecord?.isCorrect ? 1 : 0);
            const rate = attempts > 0 ? Math.round((corrects / attempts) * 100) : null;
            const tone =
              attempts === 0
                ? 'bg-slate-100 text-slate-500 border-slate-200'
                : corrects === attempts
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                : corrects > 0
                ? 'bg-amber-50 text-amber-800 border-amber-200'
                : 'bg-rose-50 text-rose-700 border-rose-200';
            return (
              <span
                className={`inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-semibold border ${tone}`}
                title="この問題の累計取り組み回数と正解回数"
              >
                <History className="w-3.5 h-3.5" />
                <span>
                  取組 {attempts}回 / 正解 {corrects}回{rate !== null ? ` (${rate}%)` : ''}
                </span>
              </span>
            );
          })()}
          {question.source && (
            <span
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold border ${
                question.source === 'pdf'
                  ? 'bg-indigo-50 text-indigo-700 border-indigo-200/70'
                  : question.source === 'sakitoo'
                  ? 'bg-sky-50 text-sky-700 border-sky-200/70'
                  : 'bg-teal-50 text-teal-700 border-teal-200/70'
              }`}
            >
              {question.source === 'pdf'
                ? 'PDF問題集'
                : question.source === 'sakitoo'
                ? 'Web問題集'
                : '基礎シナリオ'}
            </span>
          )}
          <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200/60">
            {question.domain}
          </span>
          <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-600">
            難易度: {question.difficulty}
          </span>
          {isMultiSelect && (
            <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
              {requiredSelections}つ選択
            </span>
          )}
        </div>

        <div className="flex items-center space-x-2">
          {/* Card language switcher */}
          <button
            onClick={toggleLocalLang}
            className="flex items-center space-x-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg border border-slate-200 bg-white hover:bg-slate-100/80 text-slate-700 transition-colors shadow-2xs"
            title="この問題の言語を切り替える"
          >
            <Languages className="w-3.5 h-3.5 text-blue-600" />
            <span>{currentLang === 'ja' ? 'EN表記' : '日本語表記'}</span>
          </button>

          {/* Bookmark Button */}
          <button
            onClick={onToggleBookmark}
            className={`p-1.5 rounded-lg border transition-colors ${
              isBookmarked
                ? 'bg-amber-50 border-amber-300 text-amber-600'
                : 'bg-white border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50'
            }`}
            title={isBookmarked ? 'ブックマーク解除' : '後で見直すためにブックマーク'}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>

      {/* Question Content Body */}
      <div className="p-6 md:p-8 space-y-6">
        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-snug">
          {currentLang === 'ja' ? question.titleJa : question.titleEn}
        </h3>

        {/* Scenario description box */}
        <div className="bg-slate-50/90 rounded-2xl p-5 border border-slate-200/70 text-slate-800 text-sm md:text-base leading-relaxed font-normal overflow-x-auto">
          <ScenarioContent content={currentLang === 'ja' ? question.scenarioJa : question.scenarioEn} />
        </div>

        {/* Prompt question text */}
        <div className="flex items-start space-x-2.5 text-slate-900 font-bold text-sm md:text-base pt-1">
          <HelpCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span>{currentLang === 'ja' ? question.questionJa : question.questionEn}</span>
            {isMultiSelect && !isAnswered && (
              <p className="text-xs font-semibold text-amber-700">
                ※ 複数選択問題です。{requiredSelections}つの選択肢を選んで「回答を確定する」を押してください（現在 {pendingSelections.length}/{requiredSelections} 選択中）
              </p>
            )}
          </div>
        </div>

        {/* Options list */}
        <div className="space-y-3 pt-2">
          {question.options.map((option) => {
            const isSelected = isAnswered
              ? recordedIds.includes(option.id)
              : pendingSelections.includes(option.id);

            let containerStyle =
              'border-slate-200 bg-white hover:border-blue-400 hover:bg-blue-50/20 text-slate-800';
            let badgeStyle = 'bg-slate-100 text-slate-700 border-slate-300';

            if (!isAnswered && isSelected) {
              containerStyle =
                'border-blue-600 bg-blue-50/60 text-slate-900 ring-1 ring-blue-500';
              badgeStyle = 'bg-blue-600 text-white border-blue-600';
            } else if (isAnswered) {
              if (option.isCorrect) {
                containerStyle =
                  'border-emerald-500 bg-emerald-50/50 text-slate-900 ring-1 ring-emerald-500';
                badgeStyle = 'bg-emerald-600 text-white border-emerald-600';
              } else if (isSelected && !option.isCorrect) {
                containerStyle =
                  'border-rose-400 bg-rose-50/60 text-slate-900 ring-1 ring-rose-400';
                badgeStyle = 'bg-rose-600 text-white border-rose-600';
              } else {
                containerStyle = 'border-slate-200 bg-slate-50/50 text-slate-500 opacity-80';
                badgeStyle = 'bg-slate-100 text-slate-400 border-slate-200';
              }
            }

            return (
              <div
                key={option.id}
                className={`rounded-2xl border p-4 md:p-5 transition-all text-left ${containerStyle}`}
              >
                <div
                  onClick={() => handleOptionClick(option.id)}
                  className={`flex items-start space-x-3.5 ${!isAnswered ? 'cursor-pointer' : ''}`}
                >
                  {/* Multi-select checkbox visual or option letter badge */}
                  <div className="flex items-center space-x-2 shrink-0 mt-0.5">
                    {isMultiSelect && !isAnswered && (
                      <span className={isSelected ? 'text-blue-600' : 'text-slate-400'}>
                        {isSelected ? (
                          <CheckSquare className="w-4 h-4" />
                        ) : (
                          <Square className="w-4 h-4" />
                        )}
                      </span>
                    )}
                    <span
                      className={`w-7 h-7 rounded-lg border text-xs font-bold flex items-center justify-center ${badgeStyle}`}
                    >
                      {option.id}
                    </span>
                  </div>

                  {/* Option statement */}
                  <div className="flex-1 text-sm md:text-base leading-snug">
                    <span className="font-medium text-slate-900">
                      {currentLang === 'ja' ? option.textJa : option.textEn}
                    </span>
                  </div>

                  {/* Correct / Incorrect indicator status icon */}
                  {isAnswered && (
                    <div className="shrink-0 pt-0.5">
                      {option.isCorrect ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                          <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                          {isSelected ? '正解 (選択)' : '正解'}
                        </span>
                      ) : isSelected ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 text-rose-800 border border-rose-300">
                          <XCircle className="w-3.5 h-3.5 mr-1 text-rose-600" />
                          不正解 (選択)
                        </span>
                      ) : null}
                    </div>
                  )}
                </div>

                {/* Individual option explanation when answered */}
                {isAnswered && (
                  <div className="mt-3 pt-3 border-t border-slate-200/60 pl-10 text-xs md:text-sm text-slate-600 leading-relaxed">
                    <p className="font-normal">
                      {currentLang === 'ja' ? option.explanationJa : option.explanationEn}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Confirm button for multi-select questions */}
        {isMultiSelect && !isAnswered && (
          <div className="flex justify-end pt-1">
            <button
              onClick={handleConfirmMultiSelect}
              disabled={pendingSelections.length !== requiredSelections}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold text-xs md:text-sm shadow-xs transition-colors"
            >
              回答を確定する ({pendingSelections.length} / {requiredSelections} 選択中)
            </button>
          </div>
        )}

        {/* Detailed Explanation Accordion / Card once answered */}
        {isAnswered && (
          <div className="pt-4 space-y-4">
            {/* Answer banner */}
            <div
              className={`p-4 rounded-2xl flex flex-wrap items-center justify-between gap-3 border ${
                isCorrect
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-900'
                  : 'bg-rose-500/10 border-rose-500/30 text-rose-900'
              }`}
            >
              <div className="flex items-center space-x-3">
                {isCorrect ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                ) : (
                  <XCircle className="w-6 h-6 text-rose-600 shrink-0" />
                )}
                <div>
                  <h4 className="font-bold text-base">
                    {isCorrect ? '正解です！お見事です。' : '不正解です。解説を確認しましょう。'}
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    正解の選択肢は{' '}
                    <span className="font-bold text-emerald-700">
                      [{correctOptionIds.join(', ')}]
                    </span>{' '}
                    です。
                    {recordedIds.length > 0 && (
                      <span className="ml-2 text-slate-500">
                        （あなたの選択: [{[...recordedIds].sort().join(', ')}]）
                      </span>
                    )}
                  </p>
                </div>
              </div>

              <button
                onClick={onResetQuestion}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer"
                title="この問題を未回答に戻して再挑戦"
              >
                <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                <span>この問題をやり直す</span>
              </button>
            </div>

            {/* Overall Detailed Explanation box */}
            <div className="bg-linear-to-br from-indigo-50/70 to-blue-50/50 border border-indigo-100 rounded-2xl p-5 md:p-6 space-y-4">
              <div className="flex items-center space-x-2 text-indigo-900 font-bold text-sm md:text-base">
                <BookOpenCheck className="w-5 h-5 text-indigo-600" />
                <span>全体的な解説 (Deep Dive)</span>
              </div>
              <div className="text-xs md:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                {currentLang === 'ja' ? question.overallExplanationJa : question.overallExplanationEn}
              </div>

              {/* Key Exam Points Box */}
              <div className="bg-white/90 border border-indigo-100 rounded-xl p-4 space-y-2">
                <div className="flex items-center space-x-2 text-xs font-bold text-amber-700">
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                  <span>試験攻略の要点 (Key Takeaways)</span>
                </div>
                <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-700 pl-1">
                  {(currentLang === 'ja' ? question.keyPointsJa : question.keyPointsEn).map(
                    (point, idx) => (
                      <li key={idx} className="leading-snug">
                        <span className="font-medium text-slate-800">{point}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Reference Documentation */}
              {(question.referenceTopic || question.referenceUrl) && (
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-indigo-100 text-xs text-indigo-800">
                  {question.referenceTopic && (
                    <span className="flex items-center space-x-1 font-medium">
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Microsoft Learn 関連トピック: {question.referenceTopic}</span>
                    </span>
                  )}
                  {question.referenceUrl && (
                    <a
                      href={question.referenceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-sky-700 hover:text-sky-900 underline font-semibold"
                    >
                      <span>出典ページを見る</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Footer Navigation Bar */}
      <div className="bg-slate-50/80 px-6 py-3.5 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
        <div>
          {currentIndex !== undefined && totalFilteredCount !== undefined && (
            <span>
              問題 <strong className="text-slate-800">{currentIndex + 1}</strong> / {totalFilteredCount}
            </span>
          )}
        </div>

        <div className="flex items-center space-x-2">
          {onPrev && (
            <button
              onClick={onPrev}
              className="flex items-center space-x-1 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 transition-colors font-medium shadow-2xs"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>前の問題</span>
            </button>
          )}
          {onNext && (
            <button
              onClick={onNext}
              className="flex items-center space-x-1 px-3 py-1.5 rounded-lg border border-blue-600 bg-blue-600 hover:bg-blue-700 text-white transition-colors font-semibold shadow-xs"
            >
              <span>次の問題</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
