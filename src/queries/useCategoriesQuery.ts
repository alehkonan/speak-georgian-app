import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '.';

export function useCategoriesQuery() {
  return useQuery({
    ...queryKeys.category.list,
  });
}
