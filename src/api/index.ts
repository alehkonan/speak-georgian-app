export const apiKeys = {
  user: ['user'],
  userSettings: ['userSettings'],
  session: ['session'],
  categories: ['categories'],
  randomWord: ['randomWord'],
  wordsCount: ['wordsCount'],
  wordsBySearch: (search: string) => ['searchedWords', { search }],
  words: ['words'],
  wordsByCategory: (categoryId: number) => ['words', { categoryId }],
  favoriteWords: ['words', 'favorite'],
  notLearnedWords: ['words', 'notLearned'],
} as const;
