import { useMutation, useQueryClient } from '@tanstack/react-query';
import { setWordAsFavorite } from 'src/services/supabase';
import { apiKeys } from './apiKeys';

type Payload = {
  userId: string;
  wordId: number;
};

export const useFavorites = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, error } = useMutation({
    mutationFn: ({ userId, wordId }: Payload) =>
      setWordAsFavorite(userId, wordId),
    onSuccess: () => queryClient.invalidateQueries(apiKeys.words),
  });

  return {
    switchFavorite: mutate,
    isLoading,
    error: error instanceof Error ? error : null,
  };
};
