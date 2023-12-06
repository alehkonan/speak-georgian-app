import { createQueryKeyStore } from '@lukemorales/query-key-factory';

export const queryKeys = createQueryKeyStore({
  user: {
    details: null,
  },
  category: {
    list: null,
    words: (id: number | null) => [{ id }] as const,
  },
  favorite: {
    words: null,
  },
  game: {
    word: null,
  },
  statistic: {
    word: (id: number) => [{ id }] as const,
  },
});
