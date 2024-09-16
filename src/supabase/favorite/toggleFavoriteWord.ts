import { supabaseClient } from '../client';
import { FavoriteWordSchema } from '../schemas/favorite';

type Params = {
	userId?: string;
	wordId: number;
};

export const toggleFavoriteWord = async ({ userId, wordId }: Params) => {
	if (!userId) throw new Error('User is not defined');

	const { error } = await supabaseClient.rpc('toggle_favorite_word', {
		user_id_param: userId,
		word_id_param: wordId,
	});

	if (error) throw error;

	const { data: favWord, error: favWordError } = await supabaseClient
		.from('favorites')
		.select()
		.eq('word_id', wordId)
		.single();

	if (favWordError) throw favWordError;

	return FavoriteWordSchema.parse(favWord);
};
