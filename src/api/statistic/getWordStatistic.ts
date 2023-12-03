import { supabaseApi } from '../api';
import { WordStatisticSchema } from '../schemas/statistic';

type Params = {
  userId: string | undefined;
  wordId: number;
};

export const getWordStatistic = async ({ userId, wordId }: Params) => {
  const { data, error } = await supabaseApi
    .from('statistic')
    .select()
    .eq('user_id', userId)
    .eq('word_id', wordId)
    .single();

  if (error) throw new Error(`Can't get word statistic`);

  return WordStatisticSchema.parse(data);
};
