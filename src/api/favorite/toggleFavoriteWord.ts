import { supabaseApi } from '../api';
import { WordSchema } from '../schemas/word';

type Params = {
  userId?: string;
  wordId: number;
};

export const toggleFavoriteWord = async ({ userId, wordId }: Params) => {
  const { data, error } = await supabaseApi
    .rpc('toggle_favorite_word', {
      user_id_param: userId,
      word_id_param: wordId,
    })
    .single();

  if (error) throw error;

  return WordSchema.parse(data);
};
