import { supabaseClient } from './client';

export const getCategories = async () => {
  const { data: categories, error } = await supabaseClient
    .from('categories')
    .select('*, words(id)')
    .order('name');

  if (error) {
    throw new Error(error.message, { cause: error });
  }

  return categories;
};
