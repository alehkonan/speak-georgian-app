import { useQuery } from '@tanstack/react-query';
import { getFavoriteWords } from 'src/api/favorite/getFavoriteWords';
import { useUser } from 'src/auth/useUser';
import { queryKeys } from '../keys';

export const useGetFavoriteWords = () => {
	const user = useUser();

	return useQuery({
		queryKey: queryKeys.favorite.words.queryKey,
		queryFn: () => getFavoriteWords(user?.id),
		staleTime: Number.POSITIVE_INFINITY,
	});
};
