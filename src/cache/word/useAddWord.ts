import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addWord } from 'src/api/word/addWord';
import { useUser } from 'src/auth/useUser';
import { queryKeys } from '../keys';

export const useAddWord = () => {
  const user = useUser();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addWord,
    onSuccess: ({ category_id }) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.category.words(category_id).queryKey,
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.statistic.user(user?.id || null).queryKey,
      });
    },
  });
};
