import { useMutation, useQueryClient } from '@tanstack/react-query';
import { setWordAsFavorite } from 'src/services/supabase';
import { apiKeys } from '.';

export const useFavorites = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isError } = useMutation({
    mutationFn: (wordId: number) => setWordAsFavorite(wordId),
    onSuccess: () => queryClient.invalidateQueries(apiKeys.words),
  });

  const switchFavorite = (wordId: number) => mutate(wordId);

  return {
    switchFavorite,
    isLoading,
    isError,
  };
};
