import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleFavoriteWord } from "src/supabase/favorite/toggleFavoriteWord";
import type { Word } from "src/supabase/schemas/word";

export const useToggleFavoriteWord = (categoryId: number | null) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: toggleFavoriteWord,
    onSuccess: ({ word_id, is_favorite, user_id }) => {
      queryClient.setQueryData<Word[]>(["category", "words", { id: categoryId }], (words) => {
        return words?.map((word) => (word.id === word_id ? { ...word, is_favorite } : word));
      });
      Promise.all([
        queryClient.invalidateQueries({
          queryKey: ["favorite", "words"] as const,
        }),
        queryClient.invalidateQueries({
          queryKey: ["statistic", "user", { id: user_id }] as const,
        }),
      ]);
    },
  });
};
