import { array } from 'zod';
import { supabaseClient } from '../client';
import { WordSchema } from '../schemas/word';

export const getFavoriteWords = async (userId?: string) => {
	const { data, error } = await supabaseClient
		.rpc('get_all_words', {
			user_id_param: userId,
		})
		.eq('is_favorite', true);

	if (error) throw error;

	return array(WordSchema).parse(data);
};
