export const apiKeys = {
  session: ['session'],
  user: ['user'],
  userSettings: ['user', 'settings'],
  userStatistics: ['user', 'statistics'],
  categories: (userId?: string) => ['categories', { userId }] as const,
  words: ['words'],
  verbs: ['verbs'],
  randomWord: ['randomWord'],
  wordsCount: ['wordsCount'],
  wordsBySearch: (search: string) => ['searchedWords', { search }] as const,
  wordsByCategory: (categoryId: number) => ['words', { categoryId }] as const,
  favoriteWords: ['words', 'favorite'],
  notLearnedWords: ['words', 'notLearned'],
} as const;
