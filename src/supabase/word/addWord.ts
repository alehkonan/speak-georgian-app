import { supabaseClient } from '../client';
import { type WordForm, WordSchema } from '../schemas/word';

export const addWord = async (word: WordForm) => {
	const { data, error } = await supabaseClient
		.from('words')
		.insert(word)
		.select()
		.single();

	if (error) throw error;

	return WordSchema.parse(data);
};
