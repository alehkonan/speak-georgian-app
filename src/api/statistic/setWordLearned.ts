import { supabaseApi } from '../api';

type Params = {
  userId: string;
  wordId: number;
};

export const setWordLearned = async ({ userId, wordId }: Params) => {
  const { error } = await supabaseApi.rpc('set_word_learned', {
    user_id_param: userId,
    word_id_param: wordId,
  });

  if (error) throw new Error('Unable to update word statistic');
};
