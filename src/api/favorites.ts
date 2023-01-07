import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getFavoriteWords, switchWordIsFavorite } from 'src/services/supabase';
import { Word } from 'src/shared/types';
import { apiKeys } from '.';

export const useFavoriteWordsByCategory = (
  wordId: number,
  categoryId: number | null
) => {
  const queryClient = useQueryClient();

  const onSwitchFavorites = (isFavorite: boolean) => {
    if (!categoryId) return;

    queryClient.setQueryData<Word[]>(
      apiKeys.wordsByCategory(categoryId),
      (words) =>
        words?.map((word) => ({
          ...word,
          favorites: word.id === wordId ? isFavorite : word.favorites,
        }))
    );
    queryClient.refetchQueries(apiKeys.favoriteWords);
  };

  const { mutate, isLoading, isError } = useMutation(
    () => switchWordIsFavorite(wordId),
    {
      onSuccess: onSwitchFavorites,
    }
  );

  return {
    switchIsFavorite: () => mutate(),
    isLoading,
    isError,
  };
};

export const useFavoriteWords = () => {
  const { data, isLoading, error } = useQuery(
    apiKeys.favoriteWords,
    getFavoriteWords
  );

  return {
    words: data,
    isLoading,
    error: error instanceof Error ? error : null,
  };
};
