import { array } from 'zod';
import { supabaseApi } from '../api';
import { WordSchema } from '../schemas/word';

export const getFavoriteWords = async (userId?: string) => {
  const { data, error } = await supabaseApi.rpc('get_favorite_words', {
    user_id_param: userId,
  });

  if (error) throw error;

  return array(WordSchema).parse(data);
};
