import { supabaseApi } from '../api';
import { GameWordSchema } from '../schemas/word';

export const getGameWord = async () => {
	const { data, error } = await supabaseApi.rpc('get_game_word').single();

	if (error) throw error;

	return GameWordSchema.parse(data);
};
