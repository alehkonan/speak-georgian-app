import { createQueryKeyStore } from '@lukemorales/query-key-factory';

export const queryKeys = createQueryKeyStore({
  user: {
    details: null,
  },
  category: {
    list: null,
    words: (id?: number) => [{ id }],
  },
  game: {
    word: null,
  },
});
