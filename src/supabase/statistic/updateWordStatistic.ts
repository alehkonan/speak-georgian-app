import { supabaseClient } from '../client';

type Params = {
	userId: string;
	wordId: number;
	isRightAnswer: boolean;
};

export const updateWordStatistic = async ({
	userId,
	wordId,
	isRightAnswer,
}: Params) => {
	const { error } = await supabaseClient.rpc('update_word_statistic', {
		user_id_param: userId,
		word_id_param: wordId,
		is_right_param: isRightAnswer,
	});

	if (error) throw new Error('Unable to update word statistic');
};
