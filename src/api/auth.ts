import { supabaseClient } from './../services/supabase/index';
import { useQuery } from '@tanstack/react-query';
import { apiKeys } from '.';

export const useUser = () => {
  const userQuery = useQuery(apiKeys.user, () => supabaseClient.auth.getUser());

  return {
    user: userQuery.data?.data.user,
    isLoading: userQuery.isLoading,
    error: userQuery.data?.error,
  };
};

export const useSession = () => {
  const sessionQuery = useQuery(
    apiKeys.session,
    () => supabaseClient.auth.getSession(),
    {
      staleTime: 60 * 60 * 1000,
    }
  );

  const session = sessionQuery.data?.data.session;

  return {
    isAuthenticated: Boolean(session),
    isAuthenticating: sessionQuery.isLoading,
    error: sessionQuery.data?.error,
  };
};
