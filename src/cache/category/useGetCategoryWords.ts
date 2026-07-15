import { useQuery } from "@tanstack/react-query";
import { useUserStore } from "src/store/user";
import { getCategoryWords } from "src/supabase/category/getCategoryWords";

export const useGetCategoryWords = (categoryId?: number) => {
  const { user } = useUserStore();

  return useQuery({
    queryKey: ["category", "words", { id: categoryId }],
    queryFn: () => getCategoryWords(user?.id, categoryId),
    staleTime: Number.POSITIVE_INFINITY,
  });
};
