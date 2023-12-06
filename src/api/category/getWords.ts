import { array } from 'zod';
import { supabaseApi } from '../api';
import { WordSchema } from '../schemas/word';

export const getCategoryWords = async (
  userId?: string,
  categoryId?: number,
) => {
  const { data, error } = await supabaseApi.rpc('get_category_words', {
    user_id_param: userId,
    category_id_param: categoryId,
  });

  if (error) throw error;

  return array(WordSchema).parse(data);
};
