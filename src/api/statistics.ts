import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getUserStatistics, setWordAsLearned } from 'src/services/supabase';
import { apiKeys } from './apiKeys';

type Payload = {
  userId: string;
  wordId: number;
};

export const useStatistics = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, error } = useMutation({
    mutationFn: ({ userId, wordId }: Payload) =>
      setWordAsLearned(userId, wordId),
    onSuccess: () => {
      queryClient.invalidateQueries(apiKeys.words);
      queryClient.invalidateQueries(apiKeys.userStatistics);
    },
  });

  return {
    markAsLearned: mutate,
    isLoading,
    error: error instanceof Error ? error : null,
  };
};

export const useGetStatistics = (userId?: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: apiKeys.userStatistics,
    queryFn: userId ? () => getUserStatistics(userId) : undefined,
    enabled: Boolean(userId),
  });

  return {
    statistics: data,
    isLoading,
    error: error instanceof Error ? error : null,
  };
};
