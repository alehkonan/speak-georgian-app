import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUserStore } from "src/store/user";
import { addWord } from "src/supabase/word/addWord";

export const useAddWord = () => {
  const { user } = useUserStore();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addWord,
    onSuccess: ({ category_id }) => {
      queryClient.invalidateQueries({
        queryKey: ["category", "words", { id: category_id }],
      });
      queryClient.invalidateQueries({
        queryKey: ["statistic", "user", { id: user?.id || null }],
      });
    },
  });
};
