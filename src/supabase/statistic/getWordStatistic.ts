import { supabaseClient } from '../client';
import { WordStatisticSchema } from '../schemas/statistic';

type Params = {
	userId: string | undefined;
	wordId: number;
};

export const getWordStatistic = async ({ userId, wordId }: Params) => {
	if (!userId) throw new Error('User is not defined');

	const { data, error } = await supabaseClient
		.from('statistic')
		.select()
		.eq('user_id', userId)
		.eq('word_id', wordId)
		.single();

	if (error) throw new Error(`Can't get word statistic`);

	return WordStatisticSchema.parse(data);
};
