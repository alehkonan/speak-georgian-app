export const apiKeys = {
  user: ['user'],
  session: ['session'],
  categories: ['categories'],
  words: ['words'],
  wordsCount: ['words, count'],
  randomWord: ['words', 'random'],
  favoriteWords: ['words', 'favorite'],
  wordsBySearch: (search: string) => ['words', 'search', { search }],
  wordsByCategory: (categoryId: number) => ['words', { categoryId }],
} as const;
