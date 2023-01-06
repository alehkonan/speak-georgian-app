import { useCallback, useEffect, useState } from 'react';
import type { Word } from 'src/shared/types';
import { generateGameWords } from './utils';

const GAME_WORDS_COUNT = 10;

type GameWord = Word & {
  answers: string[];
};

export const useGame = (allWords: Word[]) => {
  const [gameWords, setGameWords] = useState<GameWord[]>([]);
  const [isGameStarted, setGameStarted] = useState(false);

  const startGame = useCallback(() => setGameStarted(true), []);
  const finishGame = useCallback(() => setGameStarted(false), []);

  useEffect(() => {
    if (isGameStarted) {
      const words = generateGameWords(allWords, GAME_WORDS_COUNT);
      setGameWords(words);
    }
  }, [isGameStarted]);

  return {
    isGameStarted,
    gameWords,
    startGame,
    finishGame,
  };
};
