import { array } from 'zod';
import { supabaseClient } from '../client';
import { CategorySchema } from '../schemas/category';

export const getCategories = async () => {
	const { data, error } = await supabaseClient
		.from('categories')
		.select()
		.order('name_en');

	if (error) throw error;

	return array(CategorySchema).parse(data);
};
