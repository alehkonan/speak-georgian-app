export const apiKeys = {
  user: ['user'],
  userSettings: ['user', 'settings'],
  userStatistics: ['user', 'statistics'],
  categories: ['categories'],
  words: ['words'],
  randomWord: ['randomWord'],
  wordsCount: ['wordsCount'],
  wordsBySearch: (search: string) => ['searchedWords', { search }],
  wordsByCategory: (categoryId: number) => ['words', { categoryId }],
  favoriteWords: ['words', 'favorite'],
  notLearnedWords: ['words', 'notLearned'],
} as const;
