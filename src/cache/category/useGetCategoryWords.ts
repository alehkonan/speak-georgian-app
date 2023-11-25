import { type User } from '@supabase/supabase-js';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getCategoryWords } from 'src/api/category/getWords';

import { queryKeys } from '../keys';

export const useGetCategoryWords = (categoryId?: number) => {
  const queryClient = useQueryClient();

  const user = queryClient.getQueryData<User>(queryKeys.user.details.queryKey);

  return useQuery({
    queryKey: queryKeys.category.words(categoryId).queryKey,
    queryFn: ({ queryKey: [, , { id }] }) => getCategoryWords(user?.id, id),
    staleTime: Infinity,
  });
};
