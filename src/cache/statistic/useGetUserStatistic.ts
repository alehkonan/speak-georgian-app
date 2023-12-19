import { useQuery } from '@tanstack/react-query';
import { getUserStatistic } from 'src/api/statistic/getUserStatistic';
import { queryKeys } from '../keys';

export const useGetUserStatistic = (userId: string | undefined) => {
  return useQuery({
    queryKey: queryKeys.statistic.user(userId || null).queryKey,
    queryFn: ({ queryKey: [, , { id }] }) => {
      if (!id) return;
      return getUserStatistic(id);
    },
    enabled: Boolean(userId),
    staleTime: Infinity,
  });
};
