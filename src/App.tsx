import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { onAuthStateChanged, signInWithPopup, signOut, User } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import {
  auth,
  CloudProgressDoc,
  db,
  fetchCloudProgress,
  googleProvider,
  handleFirestoreError,
  hasProgressContent,
  mergeProgressSnapshots,
  OperationType,
  ProgressSnapshot,
  sanitizeProgressSnapshot,
  saveCloudProgress,
} from './firebase';
import { QUESTIONS_DATA } from './data/questions';
import {
  Domain,
  OptionId,
  QuestionAttemptStats,
  RoundSummary,
  UserAnswerRecord,
  ViewMode,
} from './types/quiz';
import { Header } from './components/Header';
import { FilterBar, SourceFilter } from './components/FilterBar';
import { QuestionCard } from './components/QuestionCard';
import { ExamMode } from './components/ExamMode';
import { StatsModal } from './components/StatsModal';
import { CloudSyncModal, SyncStatus } from './components/CloudSyncModal';
import { LayeredCakeVisualizer } from './components/LayeredCakeVisualizer';
import {
  Shield,
  Sparkles,
  BookOpen,
  FilterX,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Trophy,
  Cloud
} from 'lucide-react';

const STORAGE_KEYS = {
  RECORDS: 'sc500_user_records_v1',
  BOOKMARKS: 'sc500_bookmarks_v1',
  LANG: 'sc500_lang_preference_v1',
  ROUND: 'sc500_study_round_v1',
  ROUND_HISTORY: 'sc500_round_history_v1',
  QUESTION_STATS: 'sc500_question_stats_v1',
};

const PALETTE_PAGE_SIZE = 25;

export default function App() {
  // Persistence states
  const [userRecords, setUserRecords] = useState<Record<string, UserAnswerRecord>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.RECORDS);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [lang, setLang] = useState<'ja' | 'en'>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.LANG);
      return saved === 'en' ? 'en' : 'ja';
    } catch {
      return 'ja';
    }
  });

  const [studyRound, setStudyRound] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ROUND);
      const parsed = saved ? parseInt(saved, 10) : 1;
      return Number.isFinite(parsed) && parsed >= 1 ? parsed : 1;
    } catch {
      return 1;
    }
  });

  const [roundHistory, setRoundHistory] = useState<RoundSummary[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ROUND_HISTORY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [questionStats, setQuestionStats] = useState<Record<string, QuestionAttemptStats>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.QUESTION_STATS);
      if (saved) return JSON.parse(saved);

      const recordsRaw = localStorage.getItem(STORAGE_KEYS.RECORDS);
      if (recordsRaw) {
        const existing: Record<string, UserAnswerRecord> = JSON.parse(recordsRaw);
        const seeded: Record<string, QuestionAttemptStats> = {};
        Object.entries(existing).forEach(([qId, rec]) => {
          seeded[qId] = {
            attempts: 1,
            corrects: rec.isCorrect ? 1 : 0,
            lastAttemptedAt: rec.answeredAt,
          };
        });
        return seeded;
      }
      return {};
    } catch {
      return {};
    }
  });

  // UI state
  const [currentMode, setCurrentMode] = useState<ViewMode>('study');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState<Domain | 'ALL'>('ALL');
  const [selectedStatus, setSelectedStatus] = useState<
    'all' | 'unanswered' | 'correct' | 'incorrect'
  >('all');
  const [selectedSource, setSelectedSource] = useState<SourceFilter>('ALL');
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isCloudSyncOpen, setIsCloudSyncOpen] = useState(false);
  const [showResetAllConfirm, setShowResetAllConfirm] = useState(false);
  const [activeQuestionId, setActiveQuestionId] = useState<string>(QUESTIONS_DATA[0]?.id || '');
  const [palettePage, setPalettePage] = useState(0);

  // Firebase Cloud Sync state
  const [cloudUser, setCloudUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [syncStatus, setSyncStatus] = useState<SyncStatus>('idle');
  const [syncError, setSyncError] = useState<string | null>(null);
  const [lastSyncedAt, setLastSyncedAt] = useState<number | null>(null);
  const [initialSyncResolved, setInitialSyncResolved] = useState(false);
  const [pendingCloudConflict, setPendingCloudConflict] = useState<ProgressSnapshot | null>(null);

  const suppressNextCloudWriteRef = useRef(false);
  const knownCloudDocExistsRef = useRef<boolean | undefined>(undefined);
  const latestSnapshotRef = useRef<ProgressSnapshot>({
    studyRound,
    lang,
    userRecords,
    questionStats,
    bookmarkedIds,
    roundHistory,
  });

  latestSnapshotRef.current = {
    studyRound,
    lang,
    userRecords,
    questionStats,
    bookmarkedIds,
    roundHistory,
  };

  const applySnapshotToLocal = useCallback((snapshot: ProgressSnapshot) => {
    const clean = sanitizeProgressSnapshot(snapshot);
    suppressNextCloudWriteRef.current = true;
    setStudyRound(clean.studyRound);
    setLang(clean.lang);
    setUserRecords(clean.userRecords);
    setQuestionStats(clean.questionStats);
    setBookmarkedIds(clean.bookmarkedIds);
    setRoundHistory(clean.roundHistory);
  }, []);

  // Save changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.RECORDS, JSON.stringify(userRecords));
    } catch (e) {
      console.error(e);
    }
  }, [userRecords]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(bookmarkedIds));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarkedIds]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.LANG, lang);
    } catch (e) {
      console.error(e);
    }
  }, [lang]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.ROUND, String(studyRound));
    } catch (e) {
      console.error(e);
    }
  }, [studyRound]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.ROUND_HISTORY, JSON.stringify(roundHistory));
    } catch (e) {
      console.error(e);
    }
  }, [roundHistory]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.QUESTION_STATS, JSON.stringify(questionStats));
    } catch (e) {
      console.error(e);
    }
  }, [questionStats]);

  // Listen to Firebase Auth state & resolve initial cross-device sync
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCloudUser(user);
      setAuthReady(true);
      setInitialSyncResolved(false);
      setPendingCloudConflict(null);
      knownCloudDocExistsRef.current = undefined;
      setSyncError(null);

      if (!user) {
        setSyncStatus('idle');
        return;
      }

      setSyncStatus('syncing');
      try {
        const cloudDoc = await fetchCloudProgress(user.uid);
        const localSnap = sanitizeProgressSnapshot(latestSnapshotRef.current);

        if (!cloudDoc) {
          knownCloudDocExistsRef.current = false;
          if (hasProgressContent(localSnap)) {
            await saveCloudProgress(user.uid, localSnap, false);
            knownCloudDocExistsRef.current = true;
            setLastSyncedAt(Date.now());
          }
          setSyncStatus('synced');
          setInitialSyncResolved(true);
          return;
        }

        knownCloudDocExistsRef.current = true;
        const cloudSnap = sanitizeProgressSnapshot(cloudDoc);

        if (!hasProgressContent(localSnap)) {
          applySnapshotToLocal(cloudSnap);
          setLastSyncedAt(
            cloudDoc.updatedAt ? cloudDoc.updatedAt.toMillis() : Date.now()
          );
          setSyncStatus('synced');
          setInitialSyncResolved(true);
          return;
        }

        if (JSON.stringify(localSnap) === JSON.stringify(cloudSnap)) {
          setLastSyncedAt(
            cloudDoc.updatedAt ? cloudDoc.updatedAt.toMillis() : Date.now()
          );
          setSyncStatus('synced');
          setInitialSyncResolved(true);
          return;
        }

        // Both local and cloud have distinct progress — ask user how to resolve
        setPendingCloudConflict(cloudSnap);
        setSyncStatus('idle');
        setIsCloudSyncOpen(true);
      } catch (err) {
        console.error(err);
        setSyncStatus('error');
        setSyncError('クラウドデータの確認中にエラーが発生しました。');
      }
    });

    return () => unsubscribe();
  }, [applySnapshotToLocal]);

  // Real-time Firestore listener (attached only when auth is ready and initial sync resolved)
  useEffect(() => {
    if (!authReady || !cloudUser || !initialSyncResolved) return;

    const path = `userProgress/${cloudUser.uid}`;
    const docRef = doc(db, 'userProgress', cloudUser.uid);

    const unsubscribe = onSnapshot(
      docRef,
      (snapshot) => {
        if (snapshot.metadata.hasPendingWrites || !snapshot.exists()) return;
        knownCloudDocExistsRef.current = true;
        const remoteDoc = snapshot.data() as CloudProgressDoc;
        const remoteSnap = sanitizeProgressSnapshot(remoteDoc);
        const currentLocal = sanitizeProgressSnapshot(latestSnapshotRef.current);

        if (JSON.stringify(remoteSnap) !== JSON.stringify(currentLocal)) {
          applySnapshotToLocal(remoteSnap);
        }
        setLastSyncedAt(
          remoteDoc.updatedAt ? remoteDoc.updatedAt.toMillis() : Date.now()
        );
        setSyncStatus('synced');
      },
      (error) => {
        setSyncStatus('error');
        setSyncError('リアルタイム同期でエラーが発生しました。');
        handleFirestoreError(error, OperationType.GET, path);
      }
    );

    return () => unsubscribe();
  }, [authReady, cloudUser, initialSyncResolved, applySnapshotToLocal]);

  // Auto-save progress changes to Firestore
  useEffect(() => {
    if (!cloudUser || !initialSyncResolved) return;

    if (suppressNextCloudWriteRef.current) {
      suppressNextCloudWriteRef.current = false;
      return;
    }

    const timer = window.setTimeout(async () => {
      setSyncStatus('syncing');
      setSyncError(null);
      try {
        await saveCloudProgress(
          cloudUser.uid,
          latestSnapshotRef.current,
          knownCloudDocExistsRef.current
        );
        knownCloudDocExistsRef.current = true;
        setLastSyncedAt(Date.now());
        setSyncStatus('synced');
      } catch (err) {
        console.error(err);
        setSyncStatus('error');
        setSyncError('クラウドへの自動保存に失敗しました。');
      }
    }, 400);

    return () => window.clearTimeout(timer);
  }, [
    userRecords,
    questionStats,
    bookmarkedIds,
    studyRound,
    roundHistory,
    lang,
    cloudUser,
    initialSyncResolved,
  ]);

  const handleCloudSignIn = async () => {
    setSyncError(null);
    await signInWithPopup(auth, googleProvider);
  };

  const handleCloudSignOut = async () => {
    setSyncError(null);
    await signOut(auth);
  };

  const handleSaveCloudNow = async () => {
    if (!cloudUser) return;
    setSyncStatus('syncing');
    setSyncError(null);
    await saveCloudProgress(
      cloudUser.uid,
      latestSnapshotRef.current,
      knownCloudDocExistsRef.current
    );
    knownCloudDocExistsRef.current = true;
    setLastSyncedAt(Date.now());
    setSyncStatus('synced');
  };

  const handlePullFromCloud = async () => {
    if (!cloudUser) return;
    setSyncStatus('syncing');
    setSyncError(null);
    const cloudDoc = await fetchCloudProgress(cloudUser.uid);
    if (!cloudDoc) {
      knownCloudDocExistsRef.current = false;
      setSyncStatus('idle');
      throw new Error('クラウド上にまだ保存データがありません。');
    }
    knownCloudDocExistsRef.current = true;
    applySnapshotToLocal(sanitizeProgressSnapshot(cloudDoc));
    setLastSyncedAt(cloudDoc.updatedAt ? cloudDoc.updatedAt.toMillis() : Date.now());
    setSyncStatus('synced');
    setInitialSyncResolved(true);
    setPendingCloudConflict(null);
  };

  const handleResolveCloudConflict = async (
    strategy: 'merge' | 'use_cloud' | 'use_local'
  ) => {
    if (!cloudUser || !pendingCloudConflict) return;
    setSyncStatus('syncing');
    setSyncError(null);

    const localSnap = sanitizeProgressSnapshot(latestSnapshotRef.current);
    let finalSnap: ProgressSnapshot;

    if (strategy === 'use_cloud') {
      finalSnap = sanitizeProgressSnapshot(pendingCloudConflict);
      applySnapshotToLocal(finalSnap);
    } else if (strategy === 'use_local') {
      finalSnap = localSnap;
      await saveCloudProgress(cloudUser.uid, finalSnap, knownCloudDocExistsRef.current);
    } else {
      finalSnap = mergeProgressSnapshots(localSnap, pendingCloudConflict);
      applySnapshotToLocal(finalSnap);
      await saveCloudProgress(cloudUser.uid, finalSnap, knownCloudDocExistsRef.current);
    }

    knownCloudDocExistsRef.current = true;
    setPendingCloudConflict(null);
    setInitialSyncResolved(true);
    setLastSyncedAt(Date.now());
    setSyncStatus('synced');
  };

  const handleImportJsonSnapshot = async (snapshot: ProgressSnapshot) => {
    applySnapshotToLocal(snapshot);
    if (cloudUser) {
      setSyncStatus('syncing');
      await saveCloudProgress(cloudUser.uid, snapshot, knownCloudDocExistsRef.current);
      knownCloudDocExistsRef.current = true;
      setLastSyncedAt(Date.now());
      setSyncStatus('synced');
      setInitialSyncResolved(true);
      setPendingCloudConflict(null);
    }
  };

  // Handle Answer selection in Study Mode (supports single and multi-select)
  const handleSelectOption = (questionId: string, selectedOptionIds: OptionId[]) => {
    const q = QUESTIONS_DATA.find((item) => item.id === questionId);
    if (!q) return;

    const correctIds = q.options
      .filter((o) => o.isCorrect)
      .map((o) => o.id)
      .sort();
    const userIds = [...selectedOptionIds].sort();
    const isCorrect =
      correctIds.length > 0 &&
      correctIds.length === userIds.length &&
      correctIds.every((id, idx) => id === userIds[idx]);

    const now = Date.now();
    setUserRecords((prev) => ({
      ...prev,
      [questionId]: {
        selectedOptionId: selectedOptionIds[0],
        selectedOptionIds,
        isCorrect,
        answeredAt: now,
      },
    }));

    setQuestionStats((prev) => {
      const current = prev[questionId] || { attempts: 0, corrects: 0 };
      return {
        ...prev,
        [questionId]: {
          attempts: current.attempts + 1,
          corrects: current.corrects + (isCorrect ? 1 : 0),
          lastAttemptedAt: now,
        },
      };
    });
  };

  const handleRecordExamAttempts = (
    results: Array<{ questionId: string; isCorrect: boolean }>
  ) => {
    const now = Date.now();
    setQuestionStats((prev) => {
      const next = { ...prev };
      results.forEach(({ questionId, isCorrect }) => {
        const current = next[questionId] || { attempts: 0, corrects: 0 };
        next[questionId] = {
          attempts: current.attempts + 1,
          corrects: current.corrects + (isCorrect ? 1 : 0),
          lastAttemptedAt: now,
        };
      });
      return next;
    });
  };

  const handleResetQuestion = (questionId: string) => {
    setUserRecords((prev) => {
      const updated = { ...prev };
      delete updated[questionId];
      return updated;
    });
  };

  const handleToggleBookmark = (questionId: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(questionId) ? prev.filter((id) => id !== questionId) : [...prev, questionId]
    );
  };

  const handleStartNextRound = () => {
    const currentAnswered = Object.keys(userRecords).length;
    const currentCorrect = Object.values(userRecords).filter((r) => r.isCorrect).length;
    if (currentAnswered > 0) {
      setRoundHistory((prev) => [
        ...prev,
        {
          round: studyRound,
          answeredCount: currentAnswered,
          correctCount: currentCorrect,
          totalQuestions: QUESTIONS_DATA.length,
          accuracy: Math.round((currentCorrect / currentAnswered) * 100),
          finishedAt: Date.now(),
        },
      ]);
    }
    setUserRecords({});
    localStorage.removeItem(STORAGE_KEYS.RECORDS);
    setStudyRound((prev) => prev + 1);
    setSelectedStatus('all');
    if (currentMode === 'incorrect') {
      setCurrentMode('study');
    }
    setActiveQuestionId(QUESTIONS_DATA[0]?.id || '');
    setPalettePage(0);
    setShowResetAllConfirm(false);
  };

  const handleResetAllProgress = () => {
    setUserRecords({});
    setBookmarkedIds([]);
    setStudyRound(1);
    setRoundHistory([]);
    setQuestionStats({});
    localStorage.removeItem(STORAGE_KEYS.RECORDS);
    localStorage.removeItem(STORAGE_KEYS.BOOKMARKS);
    localStorage.removeItem(STORAGE_KEYS.ROUND);
    localStorage.removeItem(STORAGE_KEYS.ROUND_HISTORY);
    localStorage.removeItem(STORAGE_KEYS.QUESTION_STATS);
    setSelectedStatus('all');
    if (currentMode === 'incorrect' || currentMode === 'bookmarks') {
      setCurrentMode('study');
    }
    setActiveQuestionId(QUESTIONS_DATA[0]?.id || '');
    setPalettePage(0);
    setShowResetAllConfirm(false);
  };

  // Unique domains
  const domains: Domain[] = useMemo(() => {
    const set = new Set<Domain>();
    QUESTIONS_DATA.forEach((q) => set.add(q.domain));
    return Array.from(set);
  }, []);

  // Source counts
  const sourceCounts = useMemo(() => {
    let core = 0;
    let pdf = 0;
    let sakitoo = 0;
    QUESTIONS_DATA.forEach((q) => {
      if (q.source === 'pdf') pdf += 1;
      else if (q.source === 'sakitoo') sakitoo += 1;
      else core += 1;
    });
    return { all: QUESTIONS_DATA.length, core, pdf, sakitoo };
  }, []);

  // Question counts by domain (respecting source filter)
  const countsByDomain = useMemo(() => {
    const map: Record<string, number> = {};
    QUESTIONS_DATA.forEach((q) => {
      if (selectedSource !== 'ALL' && (q.source || 'core') !== selectedSource) return;
      map[q.domain] = (map[q.domain] || 0) + 1;
    });
    return map;
  }, [selectedSource]);

  const domainTotalCount = useMemo(() => {
    return Object.values(countsByDomain).reduce((acc, n) => acc + n, 0);
  }, [countsByDomain]);

  // Filtered questions calculation
  const filteredQuestions = useMemo(() => {
    return QUESTIONS_DATA.filter((q) => {
      if (currentMode === 'bookmarks') {
        if (!bookmarkedIds.includes(q.id)) return false;
      } else if (currentMode === 'incorrect') {
        const rec = userRecords[q.id];
        if (!rec || rec.isCorrect) return false;
      }

      if (selectedSource !== 'ALL' && (q.source || 'core') !== selectedSource) {
        return false;
      }

      if (selectedDomain !== 'ALL' && q.domain !== selectedDomain) {
        return false;
      }

      if (selectedStatus === 'unanswered' && userRecords[q.id]) {
        return false;
      }
      if (selectedStatus === 'correct' && (!userRecords[q.id] || !userRecords[q.id].isCorrect)) {
        return false;
      }
      if (selectedStatus === 'incorrect' && (!userRecords[q.id] || userRecords[q.id].isCorrect)) {
        return false;
      }

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesScenario =
          q.scenarioJa.toLowerCase().includes(query) ||
          q.scenarioEn.toLowerCase().includes(query) ||
          q.titleJa.toLowerCase().includes(query) ||
          q.titleEn.toLowerCase().includes(query) ||
          q.questionJa.toLowerCase().includes(query) ||
          String(q.number).includes(query);
        const matchesOptions = q.options.some(
          (opt) =>
            opt.textJa.toLowerCase().includes(query) ||
            opt.textEn.toLowerCase().includes(query) ||
            opt.explanationJa.toLowerCase().includes(query)
        );
        const matchesDomain = q.domain.toLowerCase().includes(query);

        if (!matchesScenario && !matchesOptions && !matchesDomain) {
          return false;
        }
      }

      return true;
    });
  }, [
    currentMode,
    bookmarkedIds,
    userRecords,
    selectedSource,
    selectedDomain,
    selectedStatus,
    searchQuery,
  ]);

  // Find active question index inside filtered list
  const activeIndex = useMemo(() => {
    const idx = filteredQuestions.findIndex((q) => q.id === activeQuestionId);
    return idx >= 0 ? idx : 0;
  }, [filteredQuestions, activeQuestionId]);

  // Keep activeQuestionId valid
  useEffect(() => {
    if (filteredQuestions.length > 0) {
      if (!filteredQuestions.some((q) => q.id === activeQuestionId)) {
        setActiveQuestionId(filteredQuestions[0].id);
      }
    }
  }, [filteredQuestions, activeQuestionId]);

  // Sync palette page with active question index
  useEffect(() => {
    setPalettePage(Math.floor(activeIndex / PALETTE_PAGE_SIZE));
  }, [activeIndex]);

  const totalPalettePages = Math.max(1, Math.ceil(filteredQuestions.length / PALETTE_PAGE_SIZE));
  const safePalettePage = Math.min(palettePage, totalPalettePages - 1);
  const visiblePaletteQuestions = filteredQuestions.slice(
    safePalettePage * PALETTE_PAGE_SIZE,
    (safePalettePage + 1) * PALETTE_PAGE_SIZE
  );

  // Quick stats
  const answeredCount = Object.keys(userRecords).length;
  const correctCount = Object.values(userRecords).filter((r) => r.isCorrect).length;
  const incorrectCount = answeredCount - correctCount;
  const totalAttempts = useMemo(
    () => Object.values(questionStats).reduce((sum, s) => sum + s.attempts, 0),
    [questionStats]
  );
  const totalCorrectAttempts = useMemo(
    () => Object.values(questionStats).reduce((sum, s) => sum + s.corrects, 0),
    [questionStats]
  );

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 flex flex-col font-sans">
      {/* Top Header */}
      <Header
        currentMode={currentMode}
        onSelectMode={(mode) => {
          setCurrentMode(mode);
          if (mode === 'exam') {
            setSearchQuery('');
            setSelectedDomain('ALL');
            setSelectedStatus('all');
            setSelectedSource('ALL');
          }
        }}
        lang={lang}
        onToggleLang={() => setLang((prev) => (prev === 'ja' ? 'en' : 'ja'))}
        onOpenStats={() => setIsStatsOpen(true)}
        answeredCount={answeredCount}
        totalQuestions={QUESTIONS_DATA.length}
        correctCount={correctCount}
        bookmarkCount={bookmarkedIds.length}
        incorrectCount={incorrectCount}
        studyRound={studyRound}
        totalAttempts={totalAttempts}
        totalCorrectAttempts={totalCorrectAttempts}
        cloudUser={cloudUser}
        syncStatus={syncStatus}
        hasPendingConflict={Boolean(pendingCloudConflict)}
        onOpenCloudSync={() => setIsCloudSyncOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        {/* Banner Alert with Exam Info */}
        <div className="bg-linear-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-lg mb-8 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-8 opacity-10 pointer-events-none">
            <Shield className="w-64 h-64 text-white" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-2.5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>最新の Microsoft 認定セキュリティ試験要件に対応</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              SC-500 / Microsoft Security 徹底解説模擬問題集
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Microsoft Defender XDR、Microsoft Sentinel、Microsoft Purview、Microsoft Entra ID、
              Defender for Cloud (CIEM / CSPM)、および AI セキュリティを網羅。基礎シナリオと実践問題集の全{' '}
              {QUESTIONS_DATA.length} 問を、各選択肢の根拠付き詳細解説とともに日本語・英語で学習できます。
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setCurrentMode('cake_map')}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-linear-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white font-extrabold text-xs shadow-md transition-all cursor-pointer"
              >
                <span>🍰 メンタルマップ（層状のケーキ）を見る</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setCurrentMode('study')}
                className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>全 {QUESTIONS_DATA.length} 問の問題を解く</span>
              </button>
              <button
                onClick={() => setIsCloudSyncOpen(true)}
                className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 text-sky-100 font-semibold text-xs border border-sky-400/30 transition-all cursor-pointer"
              >
                <Cloud className="w-3.5 h-3.5" />
                <span>{cloudUser ? 'クラウド同期済み・設定' : '他端末とセーブデータを共有'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content based on Mode */}
        {currentMode === 'cake_map' ? (
          <LayeredCakeVisualizer
            lang={lang}
            onFilterDomain={(dom) => {
              setSelectedDomain(dom as Domain);
              setCurrentMode('study');
            }}
          />
        ) : currentMode === 'exam' ? (
          <ExamMode
            questions={QUESTIONS_DATA}
            onExitExam={() => setCurrentMode('study')}
            lang={lang}
            questionStats={questionStats}
            onRecordExamAttempts={handleRecordExamAttempts}
          />
        ) : (
          <div className="space-y-6">
            {/* Filter and Search Bar */}
            <FilterBar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedDomain={selectedDomain}
              onSelectDomain={setSelectedDomain}
              selectedStatus={selectedStatus}
              onSelectStatus={setSelectedStatus}
              selectedSource={selectedSource}
              onSelectSource={setSelectedSource}
              sourceCounts={sourceCounts}
              domains={domains}
              countsByDomain={countsByDomain}
              totalCount={domainTotalCount}
            />

            {/* Questions List or Empty State */}
            {filteredQuestions.length === 0 ? (
              <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-4 shadow-xs">
                <div className="w-14 h-14 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center mx-auto">
                  <FilterX className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  該当する問題が見つかりませんでした
                </h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  現在の検索条件やフィルターに一致する問題がありません。フィルターを解除して再度お試しください。
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedDomain('ALL');
                    setSelectedStatus('all');
                    setSelectedSource('ALL');
                    if (currentMode === 'bookmarks' || currentMode === 'incorrect') {
                      setCurrentMode('study');
                    }
                  }}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition-colors"
                >
                  フィルターをリセットして全問表示
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Round Completion Banner */}
                {answeredCount >= QUESTIONS_DATA.length && currentMode === 'study' && (
                  <div className="bg-linear-to-r from-emerald-50 via-teal-50 to-indigo-50 border border-emerald-200 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 shadow-xs">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                        <Trophy className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-extrabold text-slate-900">
                          {studyRound}周目 完了！（正解率 {answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0}%）
                        </p>
                        <p className="text-xs text-slate-600">
                          全 {QUESTIONS_DATA.length} 問に回答しました。{studyRound + 1}周目に進んで定着を図りましょう。
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={handleStartNextRound}
                      className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>すべてをやり直す（{studyRound + 1}周目へ）</span>
                    </button>
                  </div>
                )}

                {/* Mode Indicator & Paginated Jump Palette */}
                <div className="bg-white/80 px-4 py-3.5 rounded-2xl border border-slate-200/80 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-700">
                      <BookOpen className="w-4 h-4 text-blue-600" />
                      <span>
                        {currentMode === 'bookmarks'
                          ? 'ブックマークした問題'
                          : currentMode === 'incorrect'
                          ? '要復習 (誤答) 問題'
                          : '実践学習モード'}
                        : <strong>{filteredQuestions.length} 問</strong>
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-600 text-white text-[11px] font-bold shadow-2xs">
                        {studyRound}周目
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-[11px] font-semibold">
                        累計: 取組 {totalAttempts}回 / 正解 {totalCorrectAttempts}回
                      </span>
                      <button
                        onClick={() => setShowResetAllConfirm((prev) => !prev)}
                        className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 hover:border-indigo-300 text-slate-700 hover:text-indigo-700 text-[11px] font-bold transition-colors shadow-2xs cursor-pointer"
                        title="回答履歴をリセットして次の周回を始める"
                      >
                        <RotateCcw className="w-3 h-3" />
                        <span>すべてをやり直す</span>
                      </button>
                    </div>

                    {totalPalettePages > 1 && (
                      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar max-w-full">
                        <button
                          disabled={safePalettePage === 0}
                          onClick={() => setPalettePage((p) => Math.max(0, p - 1))}
                          className="p-1 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-40"
                          title="前のグループ"
                        >
                          <ChevronLeft className="w-3.5 h-3.5" />
                        </button>
                        {Array.from({ length: totalPalettePages }, (_, pageIdx) => {
                          const start = pageIdx * PALETTE_PAGE_SIZE + 1;
                          const end = Math.min(
                            (pageIdx + 1) * PALETTE_PAGE_SIZE,
                            filteredQuestions.length
                          );
                          const isCurrentPage = pageIdx === safePalettePage;
                          return (
                            <button
                              key={pageIdx}
                              onClick={() => setPalettePage(pageIdx)}
                              className={`px-2 py-1 rounded-lg text-[11px] font-bold transition-colors shrink-0 ${
                                isCurrentPage
                                  ? 'bg-slate-900 text-white'
                                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                              }`}
                            >
                              {start}–{end}
                            </button>
                          );
                        })}
                        <button
                          disabled={safePalettePage >= totalPalettePages - 1}
                          onClick={() =>
                            setPalettePage((p) => Math.min(totalPalettePages - 1, p + 1))
                          }
                          className="p-1 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-40"
                          title="次のグループ"
                        >
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Inline Reset-All Confirmation Panel */}
                  {showResetAllConfirm && (
                    <div className="p-3 rounded-xl bg-indigo-50/80 border border-indigo-200 flex flex-wrap items-center justify-between gap-2.5">
                      <div className="text-xs text-slate-700">
                        <span className="font-bold text-indigo-900">現在 {studyRound}周目</span>
                        （{answeredCount}/{QUESTIONS_DATA.length}問 回答済み）をやり直しますか？
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <button
                          onClick={handleStartNextRound}
                          className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-2xs transition-colors cursor-pointer"
                        >
                          {studyRound + 1}周目としてすべてをやり直す
                        </button>
                        {(studyRound > 1 || answeredCount > 0 || bookmarkedIds.length > 0) && (
                          <button
                            onClick={handleResetAllProgress}
                            className="px-3 py-1.5 rounded-lg bg-white hover:bg-rose-50 border border-rose-200 text-rose-600 text-xs font-semibold transition-colors cursor-pointer"
                          >
                            1周目から完全リセット
                          </button>
                        )}
                        <button
                          onClick={() => setShowResetAllConfirm(false)}
                          className="px-2.5 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 text-xs font-medium transition-colors cursor-pointer"
                        >
                          キャンセル
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Visible chunk question index buttons */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {visiblePaletteQuestions.map((q) => {
                      const rec = userRecords[q.id];
                      const st = questionStats[q.id];
                      const isCurrent = q.id === activeQuestionId;
                      let badgeColor = 'bg-slate-100 text-slate-700 hover:bg-slate-200';

                      if (rec) {
                        badgeColor = rec.isCorrect
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : 'bg-rose-100 text-rose-800 border border-rose-300';
                      }

                      const tooltip = st
                        ? `第${q.number}問（取組 ${st.attempts}回 / 正解 ${st.corrects}回）`
                        : `第${q.number}問（未挑戦）`;

                      return (
                        <button
                          key={q.id}
                          onClick={() => setActiveQuestionId(q.id)}
                          title={tooltip}
                          className={`min-w-8 h-7 px-1.5 rounded-lg text-xs font-bold transition-all shrink-0 ${badgeColor} ${
                            isCurrent ? 'ring-2 ring-blue-600 ring-offset-1' : ''
                          }`}
                        >
                          {q.number}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Render Currently Selected Question */}
                {filteredQuestions[activeIndex] && (
                  <QuestionCard
                    question={filteredQuestions[activeIndex]}
                    userRecord={userRecords[filteredQuestions[activeIndex].id]}
                    isBookmarked={bookmarkedIds.includes(filteredQuestions[activeIndex].id)}
                    onSelectOption={(optionIds) =>
                      handleSelectOption(filteredQuestions[activeIndex].id, optionIds)
                    }
                    onResetQuestion={() => handleResetQuestion(filteredQuestions[activeIndex].id)}
                    onToggleBookmark={() => handleToggleBookmark(filteredQuestions[activeIndex].id)}
                    lang={lang}
                    currentIndex={activeIndex}
                    totalFilteredCount={filteredQuestions.length}
                    studyRound={studyRound}
                    attemptStats={questionStats[filteredQuestions[activeIndex].id]}
                    onPrev={
                      activeIndex > 0
                        ? () => setActiveQuestionId(filteredQuestions[activeIndex - 1].id)
                        : undefined
                    }
                    onNext={
                      activeIndex < filteredQuestions.length - 1
                        ? () => setActiveQuestionId(filteredQuestions[activeIndex + 1].id)
                        : undefined
                    }
                  />
                )}
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 mt-12 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="font-semibold text-slate-700">
              SC-500 / Microsoft Security 模擬問題集
            </span>
          </div>
          <p className="text-[11px] text-slate-400">
            Microsoft Defender XDR, Sentinel, Purview, Entra ID, Defender CSPM (CIEM) 認定試験対策
          </p>
          <div className="text-[11px] text-slate-400">
            オフライン対応 • ローカルストレージ保存 • 日本語・英語完全対応
          </div>
        </div>
      </footer>

      {/* Statistics Modal */}
      <StatsModal
        isOpen={isStatsOpen}
        onClose={() => setIsStatsOpen(false)}
        questions={QUESTIONS_DATA}
        userRecords={userRecords}
        questionStats={questionStats}
        bookmarkedIds={bookmarkedIds}
        studyRound={studyRound}
        roundHistory={roundHistory}
        onStartNextRound={handleStartNextRound}
        onResetAllProgress={handleResetAllProgress}
      />

      {/* Cloud Sync / Save Modal */}
      <CloudSyncModal
        isOpen={isCloudSyncOpen}
        onClose={() => setIsCloudSyncOpen(false)}
        user={cloudUser}
        authReady={authReady}
        syncStatus={syncStatus}
        syncError={syncError}
        lastSyncedAt={lastSyncedAt}
        localSummary={{
          studyRound,
          answeredCount,
          totalQuestions: QUESTIONS_DATA.length,
          totalAttempts,
          totalCorrectAttempts,
          bookmarkCount: bookmarkedIds.length,
        }}
        pendingCloudConflict={pendingCloudConflict}
        onSignIn={handleCloudSignIn}
        onSignOut={handleCloudSignOut}
        onSaveNow={handleSaveCloudNow}
        onPullFromCloud={handlePullFromCloud}
        onResolveConflict={handleResolveCloudConflict}
        onExportJson={() => sanitizeProgressSnapshot(latestSnapshotRef.current)}
        onImportJson={handleImportJsonSnapshot}
      />
    </div>
  );
}
