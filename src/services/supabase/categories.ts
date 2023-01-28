import { supabaseClient } from './client';

export const getCategories = async () => {
  const data = await supabaseClient.from('categories').select().order('name');
  return data;
};
