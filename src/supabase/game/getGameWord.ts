import { supabaseClient } from '../client';
import { GameWordSchema } from '../schemas/word';

export const getGameWord = async () => {
	const { data, error } = await supabaseClient.rpc('get_game_word').single();

	if (error) throw error;

	return GameWordSchema.parse(data);
};
