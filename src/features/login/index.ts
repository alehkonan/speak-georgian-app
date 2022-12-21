import { SignInWithPasswordCredentials } from '@supabase/supabase-js';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiKeys } from 'src/api';
import { supabaseClient } from 'src/services/supabase';

export const useLogin = () => {
  const queryClient = useQueryClient();
  const signInMutation = useMutation(
    (credentials: SignInWithPasswordCredentials) =>
      supabaseClient.auth.signInWithPassword(credentials),
    {
      onSuccess: () => queryClient.invalidateQueries(apiKeys.session),
    }
  );

  return {
    onLogin: signInMutation.mutate,
    isLoading: signInMutation.isLoading,
    error: signInMutation.data?.error,
  };
};
