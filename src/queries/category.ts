import { createQueryKeys } from '@lukemorales/query-key-factory';
import { getCategories } from 'src/api/categories/getCategories';

export const categoryQueryKeys = createQueryKeys('category', {
  list: {
    queryKey: null,
    queryFn: () => getCategories(),
  },
});
