import { createQueryKeys } from '@lukemorales/query-key-factory';
import { getWords } from 'src/api/words/getWords';

export const wordQueryKeys = createQueryKeys('word', {
  list: {
    queryKey: null,
    queryFn: () => getWords(),
  },
});
