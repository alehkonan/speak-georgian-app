import { useQuery } from '@tanstack/react-query';
import { getGameWord } from 'src/api/words/getGameWord';

import { queryKeys } from '../keys';

export const useGetGameWord = () => {
  return useQuery({
    queryKey: queryKeys.word.game.queryKey,
    queryFn: () => getGameWord(),
  });
};
