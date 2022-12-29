import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiKeys } from 'src/api';
import { signInWithPassword } from 'src/services/supabase';

export const useLogin = () => {
  const queryClient = useQueryClient();
  const signInMutation = useMutation(signInWithPassword, {
    onSuccess: () => queryClient.invalidateQueries(apiKeys.session),
  });

  return {
    onLogin: signInMutation.mutate,
    isLoading: signInMutation.isLoading,
    error: signInMutation.data?.error,
  };
};
