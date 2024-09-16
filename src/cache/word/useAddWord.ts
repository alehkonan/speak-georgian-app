import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useUserStore } from 'src/store/user';
import { addWord } from 'src/supabase/word/addWord';
import { queryKeys } from '../keys';

export const useAddWord = () => {
	const { user } = useUserStore();
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: addWord,
		onSuccess: ({ category_id }) => {
			queryClient.invalidateQueries({
				queryKey: queryKeys.category.words(category_id).queryKey,
			});
			queryClient.invalidateQueries({
				queryKey: queryKeys.statistic.user(user?.id || null).queryKey,
			});
		},
	});
};
