import { useQuery } from '@tanstack/react-query';
import { useUserStore } from 'src/store/user';
import { getWordStatistic } from 'src/supabase/statistic/getWordStatistic';

export const useGetWordStatistic = (wordId: number) => {
	const { user } = useUserStore();

	return useQuery({
		queryKey: ['statistic', 'word', { id: wordId }],
		queryFn: () => getWordStatistic({ userId: user?.id, wordId }),
		enabled: Boolean(user),
		// do not store game word statistic in cache, update it every time
		gcTime: 0,
	});
};
