export type GameMode = 'SOLO' | 'MULTI_INDIVIDUAL' | 'MULTI_TEAM';
export type RoomStatus = 'lobby' | 'playing' | 'results' | 'finished';
export type QuestionType = 'multiple' | 'boolean';

export interface Question {
  id: string;
  text: string;
  type: QuestionType;
  options: string[];
  correctAnswer: number;
  timeLimit: number;
}

export interface Quiz {
  id: string;
  name: string;
  description: string;
  questions: Question[];
  createdBy: string;
  createdAt: any;
}

export interface Player {
  id: string;
  name: string;
  avatar: string;
  score: number;
  teamId?: string;
  isHost?: boolean;
}

export interface Team {
  id: string;
  name: string;
  score: number;
}

export interface Room {
  id: string;
  code: string;
  quizId: string;
  status: RoomStatus;
  mode: GameMode;
  currentQuestionIndex: number;
  questionStartTime: any;
  hostId: string;
}

export interface RankingEntry {
  id: string;
  playerName: string;
  score: number;
  quizName: string;
  mode: string;
  teamName?: string;
  date: any;
}
