import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toggleFavoriteWord } from 'src/api/favorite/toggleFavoriteWord';
import { Word } from 'src/api/schemas/word';

import { queryKeys } from '../keys';

export const useToggleFavoriteWord = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: toggleFavoriteWord,
    onSuccess: ({ id, category_id, is_favorite }) => {
      queryClient.setQueryData<Word[]>(
        queryKeys.category.words(category_id).queryKey,
        (words) => words?.map((w) => (w.id === id ? { ...w, is_favorite } : w)),
      );
      queryClient.invalidateQueries({
        queryKey: queryKeys.favorite.words.queryKey,
      });
    },
  });
};
