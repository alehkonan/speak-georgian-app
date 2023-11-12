import { array } from 'zod';

import { supabaseApi } from '../api';
import { WordSchema } from '../schemas/word';

export const getCategoryWords = async (categoryId: number) => {
  const { data, error } = await supabaseApi
    .from('words')
    .select()
    .eq('category_id', categoryId)
    .order('name_en');

  if (error) throw error;

  return array(WordSchema).parse(data);
};
