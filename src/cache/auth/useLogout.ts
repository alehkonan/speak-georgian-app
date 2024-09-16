import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { useUserStore } from 'src/store/user';
import { logout } from 'src/supabase/auth/logout';

export const useLogout = () => {
	const { clear } = useUserStore();
	const navigate = useNavigate();

	return useMutation({
		mutationFn: logout,
		onSuccess: () => {
			navigate({ to: '/' });
			clear();
		},
	});
};
