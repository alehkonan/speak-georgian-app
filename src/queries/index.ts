import { mergeQueryKeys } from '@lukemorales/query-key-factory';

import { categoryQueryKeys } from './category';
import { userQueryKeys } from './user';
import { wordQueryKeys } from './word';

export const queryKeys = mergeQueryKeys(
  categoryQueryKeys,
  wordQueryKeys,
  userQueryKeys,
);
