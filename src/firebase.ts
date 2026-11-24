import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  getDocFromServer,
  setDoc,
  updateDoc,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';
import { OptionId, QuestionAttemptStats, RoundSummary, UserAnswerRecord } from './types/quiz';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(
  error: unknown,
  operationType: OperationType,
  path: string | null
): never {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo:
        auth.currentUser?.providerData?.map((provider) => ({
          providerId: provider.providerId,
          email: provider.email,
        })) || [],
    },
    operationType,
    path,
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error('Please check your Firebase configuration.');
    }
  }
}

void testConnection();

export interface ProgressSnapshot {
  studyRound: number;
  lang: 'ja' | 'en';
  userRecords: Record<string, UserAnswerRecord>;
  questionStats: Record<string, QuestionAttemptStats>;
  bookmarkedIds: string[];
  roundHistory: RoundSummary[];
}

export interface CloudProgressDoc extends ProgressSnapshot {
  ownerId: string;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

export function sanitizeProgressSnapshot(data: ProgressSnapshot): ProgressSnapshot {
  const safeRound = Math.max(1, Math.min(1000, Math.floor(Number(data.studyRound) || 1)));
  const safeLang: 'ja' | 'en' = data.lang === 'en' ? 'en' : 'ja';

  const safeRecords: Record<string, UserAnswerRecord> = {};
  const recordEntries = Object.entries(data.userRecords || {}).slice(0, 2000);
  for (const [qId, rec] of recordEntries) {
    if (!qId || !rec || typeof rec !== 'object') continue;
    const ids = Array.isArray(rec.selectedOptionIds)
      ? rec.selectedOptionIds.filter((id): id is OptionId => typeof id === 'string')
      : rec.selectedOptionId
      ? [rec.selectedOptionId]
      : [];
    safeRecords[qId] = {
      selectedOptionIds: ids,
      ...(ids[0] ? { selectedOptionId: ids[0] } : {}),
      isCorrect: Boolean(rec.isCorrect),
      answeredAt: Number(rec.answeredAt) || Date.now(),
    };
  }

  const safeStats: Record<string, QuestionAttemptStats> = {};
  const statEntries = Object.entries(data.questionStats || {}).slice(0, 2000);
  for (const [qId, st] of statEntries) {
    if (!qId || !st || typeof st !== 'object') continue;
    safeStats[qId] = {
      attempts: Math.max(0, Math.floor(Number(st.attempts) || 0)),
      corrects: Math.max(0, Math.floor(Number(st.corrects) || 0)),
      ...(st.lastAttemptedAt ? { lastAttemptedAt: Number(st.lastAttemptedAt) } : {}),
    };
  }

  const safeBookmarks = Array.from(
    new Set((data.bookmarkedIds || []).filter((id): id is string => typeof id === 'string' && id.length <= 128))
  ).slice(0, 2000);

  const safeHistory: RoundSummary[] = (data.roundHistory || [])
    .filter((item): item is RoundSummary => Boolean(item && typeof item === 'object'))
    .slice(0, 200)
    .map((item) => ({
      round: Math.max(1, Math.floor(Number(item.round) || 1)),
      answeredCount: Math.max(0, Math.floor(Number(item.answeredCount) || 0)),
      correctCount: Math.max(0, Math.floor(Number(item.correctCount) || 0)),
      totalQuestions: Math.max(0, Math.floor(Number(item.totalQuestions) || 0)),
      accuracy: Math.max(0, Math.min(100, Math.floor(Number(item.accuracy) || 0))),
      finishedAt: Number(item.finishedAt) || Date.now(),
    }));

  return {
    studyRound: safeRound,
    lang: safeLang,
    userRecords: safeRecords,
    questionStats: safeStats,
    bookmarkedIds: safeBookmarks,
    roundHistory: safeHistory,
  };
}

export async function fetchCloudProgress(uid: string): Promise<CloudProgressDoc | null> {
  const path = `userProgress/${uid}`;
  try {
    const snap = await getDoc(doc(db, 'userProgress', uid));
    if (!snap.exists()) return null;
    return snap.data() as CloudProgressDoc;
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, path);
  }
}

export async function saveCloudProgress(
  uid: string,
  snapshot: ProgressSnapshot,
  knownExists?: boolean
): Promise<void> {
  const path = `userProgress/${uid}`;
  const clean = sanitizeProgressSnapshot(snapshot);
  const docRef = doc(db, 'userProgress', uid);

  let docExists = knownExists;
  if (docExists === undefined) {
    try {
      const existingSnap = await getDoc(docRef);
      docExists = existingSnap.exists();
    } catch (error) {
      handleFirestoreError(error, OperationType.GET, path);
    }
  }

  if (!docExists) {
    try {
      await setDoc(docRef, {
        ownerId: uid,
        studyRound: clean.studyRound,
        lang: clean.lang,
        userRecords: clean.userRecords,
        questionStats: clean.questionStats,
        bookmarkedIds: clean.bookmarkedIds,
        roundHistory: clean.roundHistory,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, path);
    }
  } else {
    try {
      await updateDoc(docRef, {
        studyRound: clean.studyRound,
        lang: clean.lang,
        userRecords: clean.userRecords,
        questionStats: clean.questionStats,
        bookmarkedIds: clean.bookmarkedIds,
        roundHistory: clean.roundHistory,
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, path);
    }
  }
}

export function hasProgressContent(data: ProgressSnapshot): boolean {
  return (
    data.studyRound > 1 ||
    Object.keys(data.userRecords).length > 0 ||
    Object.keys(data.questionStats).length > 0 ||
    data.bookmarkedIds.length > 0 ||
    data.roundHistory.length > 0
  );
}

export function mergeProgressSnapshots(
  local: ProgressSnapshot,
  cloud: ProgressSnapshot
): ProgressSnapshot {
  const cleanLocal = sanitizeProgressSnapshot(local);
  const cleanCloud = sanitizeProgressSnapshot(cloud);

  const mergedRecords: Record<string, UserAnswerRecord> = { ...cleanCloud.userRecords };
  for (const [qId, rec] of Object.entries(cleanLocal.userRecords)) {
    const existing = mergedRecords[qId];
    if (!existing || rec.answeredAt >= existing.answeredAt) {
      mergedRecords[qId] = rec;
    }
  }

  const mergedStats: Record<string, QuestionAttemptStats> = { ...cleanCloud.questionStats };
  for (const [qId, st] of Object.entries(cleanLocal.questionStats)) {
    const existing = mergedStats[qId];
    if (!existing) {
      mergedStats[qId] = st;
    } else {
      mergedStats[qId] = {
        attempts: Math.max(existing.attempts, st.attempts),
        corrects: Math.max(existing.corrects, st.corrects),
        ...(Math.max(existing.lastAttemptedAt || 0, st.lastAttemptedAt || 0) > 0
          ? { lastAttemptedAt: Math.max(existing.lastAttemptedAt || 0, st.lastAttemptedAt || 0) }
          : {}),
      };
    }
  }

  const mergedBookmarks = Array.from(
    new Set([...cleanCloud.bookmarkedIds, ...cleanLocal.bookmarkedIds])
  ).slice(0, 2000);

  const historyMap = new Map<string, RoundSummary>();
  [...cleanCloud.roundHistory, ...cleanLocal.roundHistory].forEach((item) => {
    historyMap.set(`${item.round}-${item.finishedAt}`, item);
  });
  const mergedHistory = Array.from(historyMap.values())
    .sort((a, b) => a.finishedAt - b.finishedAt)
    .slice(0, 200);

  return {
    studyRound: Math.max(cleanCloud.studyRound, cleanLocal.studyRound),
    lang: cleanLocal.lang,
    userRecords: mergedRecords,
    questionStats: mergedStats,
    bookmarkedIds: mergedBookmarks,
    roundHistory: mergedHistory,
  };
}
