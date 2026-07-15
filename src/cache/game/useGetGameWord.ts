import { useQuery } from '@tanstack/react-query';
import { getGameWord } from 'src/supabase/game/getGameWord';

export const useGetGameWord = () => {
	return useQuery({
		queryKey: ['game', 'word'],
		queryFn: () => getGameWord(),
		staleTime: Number.POSITIVE_INFINITY,
	});
};
