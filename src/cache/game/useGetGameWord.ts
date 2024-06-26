import { useQuery } from '@tanstack/react-query';
import { getGameWord } from 'src/api/game/getGameWord';
import { queryKeys } from '../keys';

export const useGetGameWord = () => {
	return useQuery({
		queryKey: queryKeys.game.word.queryKey,
		queryFn: () => getGameWord(),
		staleTime: Number.POSITIVE_INFINITY,
	});
};
