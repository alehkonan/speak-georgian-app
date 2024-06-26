import { array } from 'zod';
import { supabaseApi } from '../api';
import { CategorySchema } from '../schemas/category';

export const getCategories = async () => {
	const { data, error } = await supabaseApi
		.from('categories')
		.select()
		.order('name_en');

	if (error) throw error;

	return array(CategorySchema).parse(data);
};
