import React from 'react';
import { User } from 'firebase/auth';
import { Shield, BookOpen, Clock, Bookmark, AlertCircle, BarChart3, Globe2, Cloud, CheckCircle2, RefreshCw } from 'lucide-react';
import { ViewMode } from '../types/quiz';
import { SyncStatus } from './CloudSyncModal';

interface HeaderProps {
  currentMode: ViewMode;
  onSelectMode: (mode: ViewMode) => void;
  lang: 'ja' | 'en';
  onToggleLang: () => void;
  onOpenStats: () => void;
  answeredCount: number;
  totalQuestions: number;
  correctCount: number;
  bookmarkCount: number;
  incorrectCount: number;
  studyRound: number;
  totalAttempts: number;
  totalCorrectAttempts: number;
  cloudUser: User | null;
  syncStatus: SyncStatus;
  hasPendingConflict: boolean;
  onOpenCloudSync: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentMode,
  onSelectMode,
  lang,
  onToggleLang,
  onOpenStats,
  answeredCount,
  totalQuestions,
  correctCount,
  bookmarkCount,
  incorrectCount,
  studyRound,
  totalAttempts,
  totalCorrectAttempts,
  cloudUser,
  syncStatus,
  hasPendingConflict,
  onOpenCloudSync,
}) => {
  const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Title */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-blue-700 via-indigo-600 to-sky-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-slate-900 tracking-tight text-lg">
                  SC-500
                </span>
                <span className="px-2 py-0.5 text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/60 rounded-full">
                  Microsoft Security & Compliance
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">
                Defender XDR • Sentinel • Purview • Entra ID • Defender CSPM/CIEM
              </p>
            </div>
          </div>

          {/* Right Action buttons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Quick stats badge */}
            <button
              onClick={onOpenStats}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200/80 transition-colors text-xs font-medium text-slate-700"
              title="進捗とスコア統計を表示"
            >
              <span className="px-1.5 py-0.5 rounded-md bg-indigo-600 text-white text-[11px] font-bold leading-none">
                {studyRound}周目
              </span>
              <BarChart3 className="w-3.5 h-3.5 text-indigo-600" />
              <span className="hidden md:inline">正解率:</span>
              <span className="font-bold text-slate-900">{accuracy}%</span>
              <span className="text-slate-400">({answeredCount}/{totalQuestions})</span>
              <span className="hidden lg:inline text-slate-500 border-l border-slate-300 pl-2">
                累計 {totalCorrectAttempts}/{totalAttempts}回正解
              </span>
            </button>

            {/* Cloud Sync / Save button */}
            <button
              onClick={onOpenCloudSync}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all shadow-2xs cursor-pointer ${
                hasPendingConflict
                  ? 'bg-amber-50 border-amber-300 text-amber-800 hover:bg-amber-100'
                  : cloudUser
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-800 hover:bg-emerald-100'
                  : 'bg-sky-50 border-sky-200 text-sky-700 hover:bg-sky-100'
              }`}
              title="クラウドセーブ・他端末との同期設定を開く"
            >
              {syncStatus === 'syncing' ? (
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-amber-600" />
              ) : cloudUser && !hasPendingConflict ? (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              ) : (
                <Cloud className="w-3.5 h-3.5" />
              )}
              <span className="hidden sm:inline">
                {hasPendingConflict
                  ? 'データ統合の確認'
                  : cloudUser
                  ? syncStatus === 'syncing'
                    ? '保存中...'
                    : '同期済み'
                  : 'クラウド保存'}
              </span>
            </button>

            {/* Language switch button */}
            <button
              onClick={onToggleLang}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-xs font-medium text-slate-700 transition-all shadow-2xs"
            >
              <Globe2 className="w-3.5 h-3.5 text-sky-600" />
              <span className="font-semibold text-slate-800">
                {lang === 'ja' ? '日本語' : 'English'}
              </span>
              <span className="text-[10px] text-slate-400">⇄ {lang === 'ja' ? 'EN' : 'JA'}</span>
            </button>
          </div>
        </div>

        {/* Navigation Mode Tabs */}
        <div className="flex items-center space-x-1 sm:space-x-2 border-t border-slate-100 py-2 overflow-x-auto no-scrollbar">
          <button
            onClick={() => onSelectMode('cake_map')}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
              currentMode === 'cake_map'
                ? 'bg-gradient-to-r from-amber-500 to-rose-500 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <span>🍰 メンタルマップ (層状のケーキ)</span>
          </button>

          <button
            onClick={() => onSelectMode('study')}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
              currentMode === 'study'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>実践学習モード</span>
            <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
              currentMode === 'study' ? 'bg-blue-700/80 text-blue-100' : 'bg-slate-200 text-slate-700'
            }`}>
              {totalQuestions}
            </span>
          </button>

          <button
            onClick={() => onSelectMode('exam')}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
              currentMode === 'exam'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>模擬試験 (本番想定)</span>
          </button>

          <button
            onClick={() => onSelectMode('bookmarks')}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
              currentMode === 'bookmarks'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5 text-amber-300" />
            <span>ブックマーク</span>
            {bookmarkCount > 0 && (
              <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                currentMode === 'bookmarks' ? 'bg-amber-700 text-amber-100' : 'bg-amber-100 text-amber-800'
              }`}>
                {bookmarkCount}
              </span>
            )}
          </button>

          <button
            onClick={() => onSelectMode('incorrect')}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all shrink-0 ${
              currentMode === 'incorrect'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <AlertCircle className="w-3.5 h-3.5 text-rose-300" />
            <span>要復習 (誤答)</span>
            {incorrectCount > 0 && (
              <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                currentMode === 'incorrect' ? 'bg-rose-700 text-rose-100' : 'bg-rose-100 text-rose-800'
              }`}>
                {incorrectCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
