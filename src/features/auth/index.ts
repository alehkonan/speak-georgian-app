import {
  SignInWithPasswordCredentials,
  SignUpWithPasswordCredentials,
} from '@supabase/supabase-js';
import { apiKeys } from './../../api/index';
import { supabaseClient } from './../../services/supabase/index';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { useCallback } from 'react';
import { routes } from 'src/routes';

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

export const useSignIn = () => {
  const queryClient = useQueryClient();
  const signInMutation = useMutation(
    (credentials: SignInWithPasswordCredentials) =>
      supabaseClient.auth.signInWithPassword(credentials),
    {
      onSuccess: () => queryClient.invalidateQueries(apiKeys.auth),
    }
  );

  return {
    onSignIn: signInMutation.mutate,
    isLoading: signInMutation.isLoading,
    error: signInMutation.data?.error,
  };
};

export const useSignOut = () => {
  const queryClient = useQueryClient();
  const signOutMutation = useMutation(() => supabaseClient.auth.signOut(), {
    onSuccess: () => queryClient.invalidateQueries(apiKeys.auth),
  });

  const onSignOut = useCallback(() => signOutMutation.mutate(), []);

  return {
    onSignOut,
    isLoading: signOutMutation.isLoading,
    error: signOutMutation.data?.error,
  };
};

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
