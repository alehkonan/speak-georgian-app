import { useMutation } from '@tanstack/react-query';
import { routes } from 'src/app/routes';
import { resetPasswordForEmail } from 'src/services/supabase';

export const useResetPassword = () => {
  const resetPasswordMutation = useMutation({
    mutationFn: (email: string) =>
      resetPasswordForEmail(email, routes.updatePassword),
  });

  return {
    onUpdatePassword: resetPasswordMutation.mutate,
    isLoading: resetPasswordMutation.isPending,
    error: resetPasswordMutation.data?.error,
  };
};
