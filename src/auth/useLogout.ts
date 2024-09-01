import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { logout } from 'src/supabase/auth/logout';
import { useUserStore } from './useUser';

export const useLogout = () => {
	const setUser = useUserStore((state) => state.setUser);
	const navigate = useNavigate();

	return useMutation({
		mutationFn: logout,
		onSuccess: () => {
			navigate({ to: '/' });
			setUser(null);
		},
	});
};
