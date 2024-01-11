import { supabaseApi } from '../api';
import { WordSchema } from '../schemas/word';

type Params = {
  userId: string;
  wordId: number;
};

export const setWordLearned = async ({ userId, wordId }: Params) => {
  const { error } = await supabaseApi.rpc('set_word_learned', {
    user_id_param: userId,
    word_id_param: wordId,
  });

  if (error) throw error;

  const { data: word, error: wordError } = await supabaseApi
    .from('words')
    .select()
    .eq('id', wordId)
    .single();

  if (wordError) throw wordError;

  return WordSchema.parse(word);
};
