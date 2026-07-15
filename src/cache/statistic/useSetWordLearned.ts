import { useMutation, useQueryClient } from '@tanstack/react-query';
import { setWordLearned } from 'src/supabase/statistic/setWordLearned';

export const useSetWordLearned = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: setWordLearned,
		onSuccess: ({ category_id }, { userId }) => {
			Promise.all([
				queryClient.invalidateQueries({
					queryKey: ['statistic', 'user', { id: userId }],
				}),
				queryClient.invalidateQueries({
					queryKey: ['favorite', 'words'],
				}),
				queryClient.invalidateQueries({
					queryKey: ['category', 'words', { id: category_id }],
				}),
			]);
		},
	});
};
