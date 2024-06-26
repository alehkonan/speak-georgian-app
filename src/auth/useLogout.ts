import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { logout } from 'src/api/auth/logout';
import { paths } from 'src/app/paths';
import { useUserStore } from './useUser';

export const useLogout = () => {
	const setUser = useUserStore((state) => state.setUser);
	const navigate = useNavigate();

	return useMutation({
		mutationFn: logout,
		onSuccess: () => {
			navigate(paths.root);
			setUser(null);
		},
	});
};
