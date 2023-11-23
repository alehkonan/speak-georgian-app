import { useMutation } from '@tanstack/react-query';
import { toggleFavoriteWord } from 'src/api/favorite/toggleFavoriteWord';

export const useToggleFavoriteWord = () => {
  return useMutation({
    mutationFn: toggleFavoriteWord,
    onSuccess: (isFavorite, { userId, wordId }) => {
      // TODO modify words cache with new favorite value
      console.log(
        `word with id ${wordId} for user ${userId} is ${
          isFavorite ? 'is in' : 'in not in'
        } favorites`,
      );
    },
  });
};
