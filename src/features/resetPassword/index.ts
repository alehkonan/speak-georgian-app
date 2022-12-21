import { useMutation } from '@tanstack/react-query';
import { routes } from 'src/app/routes';
import { supabaseClient } from 'src/services/supabase';

export const useResetPassword = () => {
  const resetPasswordMutation = useMutation((email: string) =>
    supabaseClient.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}${routes.updatePassword}`,
    })
  );

  return {
    onUpdatePassword: resetPasswordMutation.mutate,
    isLoading: resetPasswordMutation.isLoading,
    error: resetPasswordMutation.data?.error,
  };
};
