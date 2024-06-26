import { supabaseApi } from '../api';

export const loginWithGoogle = async () => {
	const { origin } = window.location;
	const { data, error } = await supabaseApi.auth.signInWithOAuth({
		provider: 'google',
		options: { redirectTo: origin },
	});

	if (error) throw error;

	return data;
};
