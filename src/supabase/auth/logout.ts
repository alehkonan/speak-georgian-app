import { supabaseClient } from '../client';

export const logout = async () => {
	const { error } = await supabaseClient.auth.signOut();

	if (error) throw error;
};
