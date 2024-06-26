import { useQuery } from '@tanstack/react-query';
import { getCategoryWords } from 'src/api/category/getCategoryWords';
import { useUser } from 'src/auth/useUser';
import { queryKeys } from '../keys';

export const useGetCategoryWords = (categoryId?: number) => {
	const user = useUser();

	return useQuery({
		queryKey: queryKeys.category.words(categoryId || null).queryKey,
		queryFn: () => getCategoryWords(user?.id, categoryId),
		staleTime: Number.POSITIVE_INFINITY,
	});
};
