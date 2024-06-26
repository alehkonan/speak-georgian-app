import { supabaseApi } from '../api';

export const getUserRole = async (userId: string) => {
	const { data } = await supabaseApi
		.from('roles')
		.select('role')
		.eq('user_id', userId)
		.single();

	return data?.role;
};
