import { array } from 'zod';
import { supabaseApi } from '../api';
import { WordSchema } from '../schemas/word';

export const getCategoryWords = async (
  userId?: string,
  categoryId?: number,
) => {
  let query = supabaseApi.rpc('get_all_words', { user_id_param: userId });

  if (categoryId) {
    query = query.eq('category_id', categoryId);
  } else {
    query = query.is('category_id', null);
  }

  const { data, error } = await query;

  if (error) throw error;

  return array(WordSchema).parse(data);
};
