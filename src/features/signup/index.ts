import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiKeys } from 'src/api/apiKeys';
import { signUp } from 'src/services/supabase';

export const useSignUp = () => {
  const queryClient = useQueryClient();
  const { mutate, isPending, error } = useMutation({
    mutationFn: signUp,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: apiKeys.user }),
  });

  return {
    onSignUp: mutate,
    isLoading: isPending,
    error: error instanceof Error ? error : null,
  };
};
