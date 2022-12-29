import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiKeys } from 'src/api';
import { signInWithGoogle, signInWithPassword } from 'src/services/supabase';

export const useSignIn = () => {
  const queryClient = useQueryClient();
  const signInMutation = useMutation(signInWithPassword, {
    onSuccess: () => queryClient.invalidateQueries(apiKeys.session),
  });
  const signInWithGoogleMutation = useMutation(signInWithGoogle);

  return {
    onSignInWithPassword: signInMutation.mutate,
    onSignInWithGoogle: signInWithGoogleMutation.mutate,
    isLoading: signInMutation.isLoading || signInWithGoogleMutation.isLoading,
    error: signInMutation.data?.error || signInWithGoogleMutation.data?.error,
  };
};
