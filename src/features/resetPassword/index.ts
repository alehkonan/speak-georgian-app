import { useMutation } from '@tanstack/react-query';
import { routes } from 'src/app/routes';
import { resetPasswordForEmail } from 'src/services/supabase';

export const useResetPassword = () => {
  const resetPasswordMutation = useMutation((email: string) =>
    resetPasswordForEmail(email, routes.updatePassword)
  );

  return {
    onUpdatePassword: resetPasswordMutation.mutate,
    isLoading: resetPasswordMutation.isLoading,
    error: resetPasswordMutation.data?.error,
  };
};
