import { useQuery } from '@tanstack/react-query';
import { getCategoryWords } from 'src/api/category/getWords';

import { queryKeys } from '../keys';

export const useGetCategoryWords = (categoryId?: number) => {
  return useQuery({
    queryKey: queryKeys.category.words(categoryId).queryKey,
    queryFn: ({ queryKey: [, , { id }] }) => getCategoryWords(id),
    staleTime: Infinity,
  });
};
