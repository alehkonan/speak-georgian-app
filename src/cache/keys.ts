import { createQueryKeyStore } from '@lukemorales/query-key-factory';

export const queryKeys = createQueryKeyStore({
  user: {
    details: null,
  },
  category: {
    list: null,
    words: (id?: number) => [{ id }],
  },
  favorite: {
    words: null,
  },
  game: {
    word: null,
  },
});
