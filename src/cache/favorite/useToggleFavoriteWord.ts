import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toggleFavoriteWord } from 'src/supabase/favorite/toggleFavoriteWord';
import type { Word } from 'src/supabase/schemas/word';
import { queryKeys } from '../keys';

export const useToggleFavoriteWord = (categoryId: number | null) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: toggleFavoriteWord,
		onSuccess: ({ word_id, is_favorite, user_id }) => {
			console.log(word_id, is_favorite);
			queryClient.setQueryData<Word[]>(
				queryKeys.category.words(categoryId).queryKey,
				(words) => {
					return words?.map((word) =>
						word.id === word_id ? { ...word, is_favorite } : word,
					);
				},
			);
			Promise.all([
				queryClient.invalidateQueries({
					queryKey: queryKeys.favorite.words.queryKey,
				}),
				queryClient.invalidateQueries({
					queryKey: queryKeys.statistic.user(user_id).queryKey,
				}),
			]);
		},
	});
};
