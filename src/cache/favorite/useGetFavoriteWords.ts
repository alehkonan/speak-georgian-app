import { useQuery } from '@tanstack/react-query';
import { useUser } from 'src/auth/useUser';
import { getFavoriteWords } from 'src/supabase/favorite/getFavoriteWords';
import { queryKeys } from '../keys';

export const useGetFavoriteWords = () => {
	const user = useUser();

	return useQuery({
		queryKey: queryKeys.favorite.words.queryKey,
		queryFn: () => getFavoriteWords(user?.id),
		staleTime: Number.POSITIVE_INFINITY,
	});
};
