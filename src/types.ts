export type TabType = 'activities' | 'postcard' | 'tree' | 'timeline' | 'quiz' | 'overview';

export type EventCategory = 'culture' | 'conflict' | 'modern';

export interface TimelineEvent {
  id: string;
  era: string;
  year: string;
  title: string;
  category: EventCategory;
  categoryLabel: string;
  summary: string;
  detailedDescription: string;
  keyTakeaway: string;
  primarySourceQuote?: string;
  imageIcon: string; // Lucide icon name or emoji
  location: string;
  artifacts: string[];
}

export interface PostcardData {
  studentName: string;
  era: string;
  themeGraphic: string;
  stampDesign: string;
  message: string;
  recipient: string;
  date: string;
}

export type LeafType = 'fact' | 'question' | 'insight';

export interface ExitTicketLeaf {
  id: string;
  studentName: string;
  type: LeafType;
  content: string;
  timestamp: string;
  xPercent: number; // Position on tree canvas
  yPercent: number;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // 0-indexed index
  explanation: string;
  eraContext: string;
}

export interface LessonMetadata {
  title: string;
  teacher: string;
  date: string;
  grade: string;
  termWeek: string;
  standards: {
    code: string;
    title: string;
    description: string;
  }[];
}
