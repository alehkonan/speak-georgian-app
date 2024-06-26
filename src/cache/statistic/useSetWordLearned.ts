import { useMutation, useQueryClient } from '@tanstack/react-query';
import { setWordLearned } from 'src/api/statistic/setWordLearned';
import { queryKeys } from '../keys';

export const useSetWordLearned = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: setWordLearned,
		onSuccess: ({ category_id }, { userId }) => {
			Promise.all([
				queryClient.invalidateQueries({
					queryKey: queryKeys.statistic.user(userId).queryKey,
				}),
				queryClient.invalidateQueries({
					queryKey: queryKeys.favorite.words.queryKey,
				}),
				queryClient.invalidateQueries({
					queryKey: queryKeys.category.words(category_id).queryKey,
				}),
			]);
		},
	});
};
