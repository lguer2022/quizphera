export interface Question {
  id?: string;
  text: string;
  type?: 'multiple' | 'boolean';
  options: string[];
  correctAnswer: number;
  timeLimit: number;
}

export interface Quiz {
  id?: string;
  name: string;
  description?: string;
  questions: Question[];
}
