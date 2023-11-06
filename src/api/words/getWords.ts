import { array } from 'zod';
import { supabaseApi } from '../api';
import { WordSchema } from '../schemas/word';

export const getWords = async () => {
  const { data, error } = await supabaseApi
    .from('words')
    .select()
    .order('name_en');

  if (error) throw error;

  return array(WordSchema).parse(data);
};
