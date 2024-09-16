import { supabaseClient } from '../client';

export const getUserRole = async (userId: string) => {
	const { data } = await supabaseClient
		.from('roles')
		.select('role')
		.eq('user_id', userId)
		.single();

	return data?.role;
};
