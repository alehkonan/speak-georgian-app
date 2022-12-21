import { SignUpWithPasswordCredentials } from '@supabase/supabase-js';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiKeys } from 'src/api';
import { supabaseClient } from 'src/services/supabase';

export const useSignUp = () => {
  const queryClient = useQueryClient();
  const signUpMutation = useMutation(
    (credentials: SignUpWithPasswordCredentials) =>
      supabaseClient.auth.signUp(credentials),
    {
      onSuccess: ({ data }) =>
        queryClient.setQueryData(apiKeys.user, { data: { user: data.user } }),
    }
  );

  return {
    onSignUp: signUpMutation.mutate,
    isLoading: signUpMutation.isLoading,
    error: signUpMutation.data?.error,
  };
};
