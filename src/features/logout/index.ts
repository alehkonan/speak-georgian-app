import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiKeys } from 'src/api';
import { supabaseClient } from 'src/services/supabase';

export const useLogout = () => {
  const queryClient = useQueryClient();
  const signOutMutation = useMutation(() => supabaseClient.auth.signOut(), {
    onSuccess: () => queryClient.invalidateQueries(apiKeys.session),
  });

  return {
    onLogout: signOutMutation.mutate,
    isLoading: signOutMutation.isLoading,
    error: signOutMutation.data?.error,
  };
};
