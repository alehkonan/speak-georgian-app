import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiKeys } from 'src/api/apiKeys';
import { signUp } from 'src/services/supabase';

export const useSignUp = () => {
  const queryClient = useQueryClient();
  const { mutate, isLoading, error } = useMutation({
    mutationFn: signUp,
    onSuccess: () => queryClient.invalidateQueries(apiKeys.user),
  });

  return {
    onSignUp: mutate,
    isLoading,
    error: error instanceof Error ? error : null,
  };
};
