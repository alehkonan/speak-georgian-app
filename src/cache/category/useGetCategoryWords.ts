import { useQuery } from '@tanstack/react-query';
import { useUserStore } from 'src/store/user';
import { getCategoryWords } from 'src/supabase/category/getCategoryWords';
import { queryKeys } from '../keys';

export const useGetCategoryWords = (categoryId?: number) => {
	const { user } = useUserStore();

	return useQuery({
		queryKey: queryKeys.category.words(categoryId || null).queryKey,
		queryFn: () => getCategoryWords(user?.id, categoryId),
		staleTime: Number.POSITIVE_INFINITY,
	});
};
