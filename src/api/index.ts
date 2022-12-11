export const apiKeys = {
  auth: ['auth'],
  user: ['auth', 'user'],
  session: ['auth', 'session'],
  categories: ['categories'],
  words: ['words'],
  wordsByCategory: (categoryId: number) => ['words', { categoryId }],
} as const;
