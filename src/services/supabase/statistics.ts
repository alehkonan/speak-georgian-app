import { supabaseClient } from './client';
import { getUserId } from './user';

const getWordStatistic = async (userId: string, wordId: number) => {
  const { data: statistic } = await supabaseClient
    .from('statistics')
    .select()
    .eq('word_id', wordId)
    .eq('user_id', userId);

  return statistic?.at(0);
};

export const incrementAnswers = async (wordId: number, isRight: boolean) => {
  const userId = await getUserId();
  const wordStatistic = await getWordStatistic(userId, wordId);

  if (wordStatistic) {
    const { right_answers, wrong_answers, total_answers } = wordStatistic;
    await supabaseClient.from('statistics').update({
      id: wordStatistic.id,
      right_answers: isRight ? right_answers + 1 : right_answers,
      wrong_answers: isRight ? wrong_answers : wrong_answers + 1,
      total_answers: total_answers + 1,
    });
  } else {
    await supabaseClient.from('statistics').insert({
      word_id: wordId,
      user_id: userId,
      right_answers: isRight ? 1 : 0,
      wrong_answers: isRight ? 0 : 1,
      total_answers: 1,
    });
  }
};
