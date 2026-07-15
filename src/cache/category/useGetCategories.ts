import { useQuery } from '@tanstack/react-query';
import { getCategories } from 'src/supabase/category/getCategories';

export const useGetCategories = () => {
	return useQuery({
		queryKey: ['category', 'list'],
		queryFn: () => getCategories(),
		staleTime: Number.POSITIVE_INFINITY,
	});
};
