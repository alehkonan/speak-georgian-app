import { useQuery } from '@tanstack/react-query';
import { getCategories } from 'src/api/category/getCategories';
import { queryKeys } from '../keys';

export const useGetCategories = () => {
	return useQuery({
		queryKey: queryKeys.category.list.queryKey,
		queryFn: () => getCategories(),
		staleTime: Number.POSITIVE_INFINITY,
	});
};
