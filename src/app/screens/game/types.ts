import type { Word } from 'src/services/supabase';

export type GameWord = Word & {
  answers: string[];
  isAnswered: boolean;
};

export type GameResult = Word & {
  isCorrect: boolean;
};
