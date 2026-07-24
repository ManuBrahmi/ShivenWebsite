export type TabType = 'home' | 'lessons' | 'ai-practice' | 'quiz' | 'daily-tips';

export interface SocialChannel {
  id: 'instagram' | 'facebook' | 'youtube';
  title: string;
  subtitle: string;
  icon: string;
  bgGradient: string;
  url: string;
  handle: string;
  followers: string;
  recentPosts: {
    title: string;
    description: string;
    type: string;
    time: string;
    likes?: string;
  }[];
}

export interface LessonItem {
  id: string;
  title: string;
  category: 'Spoken English' | 'Grammar' | 'Vocabulary' | 'Pronunciation';
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  description: string;
  keyTakeaways: string[];
  examples: {
    incorrect?: string;
    correct: string;
    explanation: string;
    audioText: string;
  }[];
  practiceExercise: {
    prompt: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  };
}

export interface DailyTip {
  id: string;
  date: string;
  title: string;
  category: 'Phrasal Verb' | 'Pronunciation' | 'Grammar Hack' | 'Common Mistake';
  wrongUsage?: string;
  correctUsage: string;
  meaning: string;
  exampleSentence: string;
  audioText: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  category: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'shiven';
  text: string;
  timestamp: string;
  feedback?: {
    correctedSentence?: string;
    grammarNote?: string;
    fluencyScore?: number;
  };
}
