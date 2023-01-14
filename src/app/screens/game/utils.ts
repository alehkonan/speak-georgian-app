import { Word } from 'src/shared/types';
import { generateRandomElements, getRandomInteger } from 'src/shared/utils';

export const generateAnswers = (
  rightAnswer: string,
  possibleAnswers: string[]
) => {
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

  return generateRandomElements([...answers]);
};

export const generateGameWords = (allWords: Word[], count: number) => {
  if (!allWords.length) return [];

  const answers = allWords.map((word) => word.name_en);
  const randomWords = generateRandomElements<Word>(allWords, count);

  return randomWords.map((word) => ({
    ...word,
    answers: generateAnswers(word.name_en, answers),
    isAnswered: false,
  }));
};
