export const apiKeys = {
  user: ['user'],
  session: ['session'],
  categories: ['categories'],
  words: ['words'],
  wordsByCategory: (categoryId: number) => ['words', { categoryId }],
} as const;
