import { useCallback, useRef, useState } from 'react';
import { Word } from 'src/services/supabase';
import { GameResult, GameWord } from './types';
import { generateGameWords } from './utils';

export const GAME_WORDS_COUNT = 10;

export const useGame = (allWords: Word[] | undefined) => {
  const [gameWords, setGameWords] = useState<GameWord[]>();
  const [results, setResults] = useState<GameResult[]>();
  const tempResults = new Set<GameResult>();

  const startGame = useCallback(() => {
    if (!allWords) return;

    const words = generateGameWords(allWords, GAME_WORDS_COUNT);
    setResults(undefined);
    setGameWords(words);
  }, [allWords]);

  const finishGame = useCallback(() => setGameWords(undefined), []);
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
    closeResults,
    startGame,
    finishGame,
    checkIfGameIsFinished,
  };
};
