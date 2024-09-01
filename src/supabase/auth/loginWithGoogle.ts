import { supabaseClient } from '../client';

export const loginWithGoogle = async () => {
	const { origin } = window.location;
	const { data, error } = await supabaseClient.auth.signInWithOAuth({
		provider: 'google',
		options: { redirectTo: origin },
	});

	if (error) throw error;

	return data;
};
