import { useQuery } from '@tanstack/react-query';
import { useUserStore } from 'src/store/user';
import { getWordStatistic } from 'src/supabase/statistic/getWordStatistic';
import { queryKeys } from '../keys';

export const useGetWordStatistic = (wordId: number) => {
	const { user } = useUserStore();

	return useQuery({
		queryKey: queryKeys.statistic.word(wordId).queryKey,
		queryFn: () => getWordStatistic({ userId: user?.id, wordId }),
		enabled: Boolean(user),
		// do not store game word statistic in cache, update it every time
		gcTime: 0,
	});
};
