import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getUserStatistics, setWordAsLearned } from 'src/services/supabase';
import { apiKeys } from '.';

export const useStatistics = () => {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: (wordId: number) => setWordAsLearned(wordId),
    onSuccess: () => {
      queryClient.invalidateQueries(apiKeys.words);
      queryClient.invalidateQueries(apiKeys.userStatistics);
    },
  });

  const markAsLearned = (wordId: number) => mutate(wordId);

  return {
    markAsLearned,
    isLoading,
  };
};

export const useGetStatistics = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: apiKeys.userStatistics,
    queryFn: getUserStatistics,
  });

  return {
    statistics: data,
    error: error instanceof Error ? error : null,
    isLoading,
  };
};
