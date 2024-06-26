import { array } from 'zod';
import { supabaseApi } from '../api';
import { WordSchema } from '../schemas/word';

export const getFavoriteWords = async (userId?: string) => {
	const { data, error } = await supabaseApi
		.rpc('get_all_words', {
			user_id_param: userId,
		})
		.eq('is_favorite', true);

	if (error) throw error;

	return array(WordSchema).parse(data);
};
