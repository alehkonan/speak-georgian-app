import { useCallback, useEffect, useRef, useState } from 'react';
import type { Word } from 'src/shared/types';
import { generateGameWords } from './utils';

export const GAME_WORDS_COUNT = 10;

type GameWord = Word & {
  answers: string[];
  isAnswered: boolean;
};

type GameResult = Word & {
  isCorrect: boolean;
};

export const useGame = (allWords: Word[]) => {
  const [gameWords, setGameWords] = useState<GameWord[]>([]);
  const [results, setResults] = useState<GameResult[]>();
  const [isGameStarted, setGameStarted] = useState(false);
  const tempResults = new Set<GameResult>();
  const containerRef = useRef<HTMLDivElement | null>(null);

  const showNextCard = () => {
    if (!containerRef.current) return;
    const { scrollLeft, offsetWidth } = containerRef.current;
    containerRef.current.scrollTo({
      left: scrollLeft + offsetWidth,
      behavior: 'smooth',
    });
  };

  const startGame = useCallback(() => {
    setResults(undefined);
    setGameStarted(true);
  }, []);

  const finishGame = useCallback(() => {
    containerRef.current?.scrollTo({ left: 0 });
    setGameStarted(false);
  }, []);

  const closeResults = () => setResults(undefined);

  const checkIfGameIsFinished = (result: GameResult) => {
    tempResults.add(result);
    if (tempResults.size === GAME_WORDS_COUNT) {
      finishGame();
      setResults([...tempResults]);
      tempResults.clear();
    }
  };

  useEffect(() => {
    if (isGameStarted) {
      const words = generateGameWords(allWords, GAME_WORDS_COUNT);
      setGameWords(words);
    }
  }, [isGameStarted]);

  return {
    isGameStarted,
    gameWords,
    results,
    containerRef,
    showNextCard,
    closeResults,
    startGame,
    finishGame,
    checkIfGameIsFinished,
  };
};
