import { useQuery } from '@tanstack/react-query';
import { useUserStore } from 'src/store/user';
import { getFavoriteWords } from 'src/supabase/favorite/getFavoriteWords';

export const useGetFavoriteWords = () => {
	const { user } = useUserStore();

	return useQuery({
		queryKey: ['favorite', 'words'],
		queryFn: () => getFavoriteWords(user?.id),
		staleTime: Number.POSITIVE_INFINITY,
	});
};
