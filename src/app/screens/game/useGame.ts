import shuffle from 'lodash/shuffle';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Word } from 'src/shared/types';
import { getRandomInteger } from 'src/shared/utils';

const generateRandomWords = (words: Word[], count: number) => {
  const shuffled = [...words].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

const generateAnswers = (rightAnswer: string, possibleAnswers: string[]) => {
  const answers = new Set<string>();

  answers.add(rightAnswer);

  for (let i = 0; i < 3; i++) {
    const getRandomWord = () => {
      const index = getRandomInteger(0, possibleAnswers.length);
      return possibleAnswers[index];
    };
    let word = getRandomWord();
    while (answers.has(word)) {
      word = getRandomWord();
    }
    answers.add(word);
  }

  return shuffle([...answers]);
};

const GAME_WORDS_COUNT = 10;

export const useGame = (words: Word[]) => {
  const [isGameStarted, setGameStarted] = useState(true);

  const allAnswers = useMemo(() => words.map((word) => word.name_en), [words]);

  const gameWords = useMemo(() => {
    if (!words.length) return [];
    const randomWords = generateRandomWords(words, GAME_WORDS_COUNT);
    return randomWords.map((word) => ({
      ...word,
      answers: generateAnswers(word.name_en, allAnswers),
    }));
  }, [words, allAnswers]);

  // const showNextCard = () => {
  //   setCurrentWordIndex(getRandomInteger(0, words.length - 1));
  // };

  const startGame = useCallback(() => setGameStarted(true), []);
  const finishGame = useCallback(() => setGameStarted(false), []);

  return {
    isGameStarted,
    gameWords,
    startGame,
    finishGame,
  };
};
