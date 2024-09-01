import { useMutation } from '@tanstack/react-query';
import { loginWithGoogle } from 'src/supabase/auth/loginWithGoogle';

export const useLogin = () => {
	return useMutation({
		mutationFn: loginWithGoogle,
		onSuccess: ({ provider, url }) => {
			console.log(provider, url);
		},
	});
};
