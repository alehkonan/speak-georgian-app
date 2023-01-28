import { useCallback, useRef, useState } from 'react';
import { Word } from 'src/services/supabase';
import { generateGameWords } from './utils';

export const GAME_WORDS_COUNT = 10;

type GameWord = Word & {
  answers: string[];
  isAnswered: boolean;
};

type GameResult = Word & {
  isCorrect: boolean;
};

export const useGame = (allWords: Word[] | undefined) => {
  const [gameWords, setGameWords] = useState<GameWord[]>();
  const [results, setResults] = useState<GameResult[]>();
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
    if (!allWords) return;

    const words = generateGameWords(allWords, GAME_WORDS_COUNT);
    setResults(undefined);
    setGameWords(words);
  }, [allWords]);

  const finishGame = useCallback(() => {
    setGameWords(undefined);
    containerRef.current?.scrollTo({ left: 0 });
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

  return {
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
