export type OptionId = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

export type QuestionSource = 'core' | 'pdf' | 'sakitoo';

export type Domain =
  | 'Defender XDR & 統合SecOps'
  | 'Entra ID & CIEM'
  | 'Purview & コンプライアンス監査'
  | 'Sentinel & セキュリティ運用'
  | 'Defender for Cloud & クラウド態勢'
  | 'AI セキュリティ & Copilot';

export type Difficulty = '標準 (Medium)' | '応用 (Hard)' | '高度 (Expert)';

export interface QuizOption {
  id: OptionId;
  textJa: string;
  textEn: string;
  isCorrect: boolean;
  explanationJa: string;
  explanationEn: string;
}

export interface Question {
  id: string;
  number: number;
  source?: QuestionSource;
  domain: Domain;
  difficulty: Difficulty;
  requiredSelections?: number;
  titleJa: string;
  titleEn: string;
  scenarioJa: string;
  scenarioEn: string;
  questionJa: string;
  questionEn: string;
  options: QuizOption[];
  overallExplanationJa: string;
  overallExplanationEn: string;
  keyPointsJa: string[];
  keyPointsEn: string[];
  referenceTopic?: string;
  referenceUrl?: string;
}

export interface UserAnswerRecord {
  selectedOptionId?: OptionId;
  selectedOptionIds?: OptionId[];
  isCorrect: boolean;
  answeredAt: number;
}

export interface ExamResult {
  totalQuestions: number;
  correctAnswers: number;
  scorePercentage: number;
  passed: boolean;
  timeSpentSeconds: number;
  domainScores: Record<string, { correct: number; total: number }>;
  userAnswers: Record<string, OptionId[]>;
  date: string;
}

export interface RoundSummary {
  round: number;
  answeredCount: number;
  correctCount: number;
  totalQuestions: number;
  accuracy: number;
  finishedAt: number;
}

export interface QuestionAttemptStats {
  attempts: number;
  corrects: number;
  lastAttemptedAt?: number;
}

export type ViewMode = 'study' | 'exam' | 'bookmarks' | 'incorrect' | 'cake_map';
