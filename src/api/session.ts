import { supabaseClient } from '../services/supabase/index';
import { useQuery } from '@tanstack/react-query';
import { apiKeys } from '.';

export const useSession = () => {
  const { data, isLoading } = useQuery(
    apiKeys.session,
    () => supabaseClient.auth.getSession(),
    {
      staleTime: 60 * 1000,
    }
  );

  return {
    session: data?.data.session,
    error: data?.error,
    isLoading: isLoading,
  };
};
