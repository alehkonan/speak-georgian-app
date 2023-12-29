import { useQuery } from '@tanstack/react-query';
import { getWordStatistic } from 'src/api/statistic/getWordStatistic';
import { useUser } from 'src/auth/useUser';
import { queryKeys } from '../keys';

export const useGetWordStatistic = (wordId: number) => {
  const user = useUser();

  return useQuery({
    queryKey: queryKeys.statistic.word(wordId).queryKey,
    queryFn: () => getWordStatistic({ userId: user?.id, wordId }),
    enabled: Boolean(user),
  });
};
