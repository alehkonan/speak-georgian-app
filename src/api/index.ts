export const apiKeys = {
  user: ['user'],
  session: ['session'],
  categories: ['categories'],
  randomWord: ['randomWord'],
  wordsCount: ['wordsCount'],
  wordsBySearch: (search: string) => ['searchedWords', { search }],
  words: ['words'],
  wordsByCategory: (categoryId: number) => ['words', { categoryId }],
  favoriteWords: ['words', 'favorite'],
} as const;
