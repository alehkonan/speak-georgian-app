import { createQueryKeys } from '@lukemorales/query-key-factory';
import { getUser } from 'src/api/auth/getUser';

export const userQueryKeys = createQueryKeys('user', {
  details: {
    queryKey: null,
    queryFn: () => getUser(),
  },
});
