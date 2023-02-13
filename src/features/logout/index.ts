import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { routes } from 'src/app/routes';
import { signOut } from 'src/services/supabase';

export const useLogout = () => {
  const navigate = useNavigate();
  const {
    mutate: onLogout,
    isLoading,
    error,
  } = useMutation({
    mutationFn: signOut,
    onSuccess: () => navigate(routes.welcome),
  });

  return {
    onLogout,
    isLoading,
    error: error instanceof Error ? error : null,
  };
};
