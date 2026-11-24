import React, { useRef, useState } from 'react';
import { User } from 'firebase/auth';
import {
  Cloud,
  CloudOff,
  CheckCircle2,
  RefreshCw,
  LogIn,
  LogOut,
  Download,
  Upload,
  X,
  AlertCircle,
  GitMerge,
  Smartphone,
} from 'lucide-react';
import { ProgressSnapshot, sanitizeProgressSnapshot } from '../firebase';

export type SyncStatus = 'idle' | 'syncing' | 'synced' | 'error';

interface CloudSyncModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
  authReady: boolean;
  syncStatus: SyncStatus;
  syncError: string | null;
  lastSyncedAt: number | null;
  localSummary: {
    studyRound: number;
    answeredCount: number;
    totalQuestions: number;
    totalAttempts: number;
    totalCorrectAttempts: number;
    bookmarkCount: number;
  };
  pendingCloudConflict: ProgressSnapshot | null;
  onSignIn: () => Promise<void>;
  onSignOut: () => Promise<void>;
  onSaveNow: () => Promise<void>;
  onPullFromCloud: () => Promise<void>;
  onResolveConflict: (strategy: 'merge' | 'use_cloud' | 'use_local') => Promise<void>;
  onExportJson: () => ProgressSnapshot;
  onImportJson: (snapshot: ProgressSnapshot) => Promise<void>;
}

export const CloudSyncModal: React.FC<CloudSyncModalProps> = ({
  isOpen,
  onClose,
  user,
  authReady,
  syncStatus,
  syncError,
  lastSyncedAt,
  localSummary,
  pendingCloudConflict,
  onSignIn,
  onSignOut,
  onSaveNow,
  onPullFromCloud,
  onResolveConflict,
  onExportJson,
  onImportJson,
}) => {
  const [actionMessage, setActionMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);
  const [isBusy, setIsBusy] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  if (!isOpen) return null;

  const formatDateTime = (ts: number | null) => {
    if (!ts) return '未保存';
    try {
      return new Date(ts).toLocaleString('ja-JP', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
    } catch {
      return '記録あり';
    }
  };

  const handleDownloadBackup = () => {
    const data = onExportJson();
    const blob = new Blob(
      [
        JSON.stringify(
          {
            version: 1,
            exportedAt: new Date().toISOString(),
            data,
          },
          null,
          2
        ),
      ],
      { type: 'application/json' }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const dateStr = new Date().toISOString().slice(0, 10);
    a.href = url;
    a.download = `sc500-save-${dateStr}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setActionMessage({
      type: 'success',
      text: '学習データのバックアップファイル (.json) を保存しました。',
    });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;

    try {
      setIsBusy(true);
      const rawText = await file.text();
      const parsed = JSON.parse(rawText);
      const candidate = parsed && typeof parsed === 'object' && 'data' in parsed ? parsed.data : parsed;
      if (!candidate || typeof candidate !== 'object') {
        throw new Error('無効なセーブデータ形式です。');
      }
      const clean = sanitizeProgressSnapshot(candidate as ProgressSnapshot);
      await onImportJson(clean);
      setActionMessage({
        type: 'success',
        text: 'バックアップファイルを読み込み、現在のデータに反映しました。',
      });
    } catch (err) {
      setActionMessage({
        type: 'error',
        text:
          err instanceof Error
            ? `読み込みに失敗しました: ${err.message}`
            : 'バックアップファイルの形式が正しくありません。',
      });
    } finally {
      setIsBusy(false);
    }
  };

  const runAction = async (fn: () => Promise<void>, successText?: string) => {
    setActionMessage(null);
    setIsBusy(true);
    try {
      await fn();
      if (successText) {
        setActionMessage({ type: 'success', text: successText });
      }
    } catch (err) {
      setActionMessage({
        type: 'error',
        text: err instanceof Error ? err.message : '処理中にエラーが発生しました。',
      });
    } finally {
      setIsBusy(false);
    }
  };

  const conflictSummary = pendingCloudConflict
    ? {
        round: pendingCloudConflict.studyRound,
        answered: Object.keys(pendingCloudConflict.userRecords || {}).length,
        attempts: Object.values(pendingCloudConflict.questionStats || {}).reduce(
          (s, v) => s + (v.attempts || 0),
          0
        ),
        corrects: Object.values(pendingCloudConflict.questionStats || {}).reduce(
          (s, v) => s + (v.corrects || 0),
          0
        ),
        bookmarks: (pendingCloudConflict.bookmarkedIds || []).length,
      }
    : null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl space-y-5 relative border border-slate-200">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="閉じる"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3 pr-8">
          <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
            <Cloud className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">セーブ・他端末との同期</h3>
            <p className="text-xs text-slate-500">
              GoogleログインでPC・スマホ・タブレット間の学習履歴を自動同期します
            </p>
          </div>
        </div>

        {/* Conflict Resolution Banner */}
        {pendingCloudConflict && conflictSummary && (
          <div className="rounded-2xl bg-amber-50 border border-amber-300 p-4 space-y-3">
            <div className="flex items-start space-x-2.5">
              <GitMerge className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs text-amber-950">
                <p className="font-bold text-sm">
                  この端末とクラウドの両方に学習データがあります
                </p>
                <p className="text-amber-800 leading-relaxed">
                  どちらのデータを使うか、または両方を統合するか選択してください。
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  <div className="bg-white/90 rounded-xl p-2.5 border border-amber-200">
                    <span className="font-bold text-slate-800 block">この端末のデータ</span>
                    <span className="text-[11px] text-slate-600">
                      {localSummary.studyRound}周目 / 回答 {localSummary.answeredCount}問 / 累計{' '}
                      {localSummary.totalAttempts}回取組
                    </span>
                  </div>
                  <div className="bg-white/90 rounded-xl p-2.5 border border-amber-200">
                    <span className="font-bold text-indigo-800 block">クラウドのデータ</span>
                    <span className="text-[11px] text-slate-600">
                      {conflictSummary.round}周目 / 回答 {conflictSummary.answered}問 / 累計{' '}
                      {conflictSummary.attempts}回取組
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                disabled={isBusy}
                onClick={() =>
                  runAction(
                    () => onResolveConflict('merge'),
                    '両端末のデータを統合してクラウドに保存しました。'
                  )
                }
                className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
              >
                両方を統合する（おすすめ）
              </button>
              <button
                disabled={isBusy}
                onClick={() =>
                  runAction(
                    () => onResolveConflict('use_cloud'),
                    'クラウドの学習データをこの端末に読み込みました。'
                  )
                }
                className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs font-bold transition-colors cursor-pointer"
              >
                クラウドのデータを優先
              </button>
              <button
                disabled={isBusy}
                onClick={() =>
                  runAction(
                    () => onResolveConflict('use_local'),
                    'この端末のデータでクラウドを上書きしました。'
                  )
                }
                className="px-3.5 py-2 rounded-xl bg-white hover:bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold transition-colors cursor-pointer"
              >
                この端末でクラウドを上書き
              </button>
            </div>
          </div>
        )}

        {/* Cloud Account Section */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 space-y-3.5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center space-x-2">
              <Smartphone className="w-4 h-4 text-sky-600" />
              <span className="text-xs font-bold text-slate-800">クラウドセーブ（自動同期）</span>
            </div>
            {user ? (
              <span
                className={`inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                  syncStatus === 'syncing'
                    ? 'bg-amber-100 text-amber-800'
                    : syncStatus === 'error'
                    ? 'bg-rose-100 text-rose-700'
                    : 'bg-emerald-100 text-emerald-800'
                }`}
              >
                {syncStatus === 'syncing' ? (
                  <RefreshCw className="w-3 h-3 animate-spin" />
                ) : syncStatus === 'error' ? (
                  <AlertCircle className="w-3 h-3" />
                ) : (
                  <CheckCircle2 className="w-3 h-3" />
                )}
                <span>
                  {syncStatus === 'syncing'
                    ? '保存中...'
                    : syncStatus === 'error'
                    ? '同期エラー'
                    : 'クラウド同期中'}
                </span>
              </span>
            ) : (
              <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-200 text-slate-600">
                <CloudOff className="w-3 h-3" />
                <span>未ログイン（この端末のみ）</span>
              </span>
            )}
          </div>

          {!authReady ? (
            <p className="text-xs text-slate-500">認証状態を確認しています...</p>
          ) : !user ? (
            <div className="space-y-3">
              <p className="text-xs text-slate-600 leading-relaxed">
                別の端末で進めていた問題データを引き継いだり、リアルタイムで共有したりするには、同じ Google アカウントでログインしてください。
              </p>
              <button
                disabled={isBusy}
                onClick={() => runAction(onSignIn)}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-xs font-bold shadow-sm transition-colors cursor-pointer"
              >
                <LogIn className="w-4 h-4" />
                <span>Google アカウントでログインして同期</span>
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="bg-white rounded-xl p-3 border border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center space-x-3">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={user.displayName || 'User'}
                      className="w-9 h-9 rounded-full border border-slate-200"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
                      {(user.displayName || user.email || 'U').charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div>
                    <p className="text-xs font-bold text-slate-900">
                      {user.displayName || 'Google ユーザー'}
                    </p>
                    <p className="text-[11px] text-slate-500">{user.email}</p>
                  </div>
                </div>
                <div className="text-right text-[11px] text-slate-500">
                  <span className="block">最終クラウド保存</span>
                  <span className="font-semibold text-slate-700">{formatDateTime(lastSyncedAt)}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  disabled={isBusy}
                  onClick={() =>
                    runAction(onSaveNow, '現在の学習データをクラウドに保存しました。')
                  }
                  className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs font-bold shadow-2xs transition-colors cursor-pointer"
                >
                  <Cloud className="w-3.5 h-3.5" />
                  <span>今すぐクラウドに保存</span>
                </button>
                <button
                  disabled={isBusy}
                  onClick={() =>
                    runAction(
                      onPullFromCloud,
                      'クラウドから最新の学習データを取得しました。'
                    )
                  }
                  className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 disabled:opacity-50 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>クラウドから再読み込み</span>
                </button>
                <button
                  disabled={isBusy}
                  onClick={() =>
                    runAction(onSignOut, 'ログアウトしました（この端末の履歴は残ります）。')
                  }
                  className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-white hover:bg-rose-50 border border-slate-200 hover:border-rose-200 text-slate-600 hover:text-rose-600 text-xs font-semibold transition-colors cursor-pointer ml-auto"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>ログアウト</span>
                </button>
              </div>
            </div>
          )}

          {syncError && (
            <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-start space-x-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{syncError}</span>
            </div>
          )}
        </div>

        {/* Current Local Data Summary */}
        <div className="rounded-2xl border border-slate-200 p-4 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600 bg-white">
          <span className="font-bold text-slate-800">現在の保存データ:</span>
          <span>
            <strong className="text-indigo-700">{localSummary.studyRound}周目</strong> ／ 回答{' '}
            <strong>
              {localSummary.answeredCount}/{localSummary.totalQuestions}
            </strong>
            問 ／ 累計取組 <strong>{localSummary.totalAttempts}</strong>回（正解{' '}
            <strong>{localSummary.totalCorrectAttempts}</strong>回）／ ブックマーク{' '}
            <strong>{localSummary.bookmarkCount}</strong>件
          </span>
        </div>

        {/* Manual JSON Backup Export / Import */}
        <div className="rounded-2xl border border-slate-200 p-4 space-y-2.5">
          <div>
            <h4 className="text-xs font-bold text-slate-800">
              ファイルでデータ移行・バックアップ（ログイン不要）
            </h4>
            <p className="text-[11px] text-slate-500 mt-0.5">
              別のブラウザやオフライン端末へデータを移したい場合は、JSONファイルとして保存・読み込みできます。
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              disabled={isBusy}
              onClick={handleDownloadBackup}
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>セーブデータを書き出す (.json)</span>
            </button>
            <button
              disabled={isBusy}
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>ファイルから読み込む</span>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="application/json,.json"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
        </div>

        {actionMessage && (
          <div
            className={`p-3 rounded-xl border text-xs flex items-center space-x-2 ${
              actionMessage.type === 'success'
                ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                : 'bg-rose-50 border-rose-200 text-rose-700'
            }`}
          >
            {actionMessage.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 shrink-0" />
            )}
            <span>{actionMessage.text}</span>
          </div>
        )}

        <div className="flex justify-end pt-1">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
};
