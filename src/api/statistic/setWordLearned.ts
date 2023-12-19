import { supabaseApi } from '../api';
import { WordSchema } from '../schemas/word';

type Params = {
  userId: string;
  wordId: number;
};

export const setWordLearned = async ({ userId, wordId }: Params) => {
  const { data, error } = await supabaseApi
    .rpc('set_word_learned', {
      user_id_param: userId,
      word_id_param: wordId,
    })
    .single();

  if (error) throw new Error('Unable to update word statistic');

  return WordSchema.parse(data);
};
