import { useQuery } from '@tanstack/react-query';
import { useUserStore } from 'src/store/user';
import { getFavoriteWords } from 'src/supabase/favorite/getFavoriteWords';
import { queryKeys } from '../keys';

export const useGetFavoriteWords = () => {
	const { user } = useUserStore();

	return useQuery({
		queryKey: queryKeys.favorite.words.queryKey,
		queryFn: () => getFavoriteWords(user?.id),
		staleTime: Number.POSITIVE_INFINITY,
	});
};
