export const apiKeys = {
  user: ['user'],
  session: ['session'],
  categories: ['categories'],
  words: ['words'],
  wordsCount: ['words, count'],
  randomWord: ['words', 'random'],
  wordsByCategory: (categoryId: number) => ['words', { categoryId }],
} as const;
