import { array } from 'zod';

import { supabaseApi } from '../api';
import { WordSchema } from '../schemas/word';

export const getCategoryWords = async (categoryId?: number) => {
  const { data, error } = await supabaseApi.rpc('get_category_words', {
    category_id_param: categoryId,
  });

  if (error) throw error;

  return array(WordSchema).parse(data);
};
