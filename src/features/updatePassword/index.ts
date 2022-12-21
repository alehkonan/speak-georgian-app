import { useMutation } from '@tanstack/react-query';
import { supabaseClient } from 'src/services/supabase';

export const useUpdatePassword = () => {
  const updatePasswordMutation = useMutation((password: string) =>
    supabaseClient.auth.updateUser({ password })
  );

  return {
    onUpdatePassword: updatePasswordMutation.mutate,
    isLoading: updatePasswordMutation.isLoading,
    error: updatePasswordMutation.data?.error,
  };
};
