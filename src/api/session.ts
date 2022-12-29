import { useQuery } from '@tanstack/react-query';
import { getSession } from 'src/services/supabase';
import { apiKeys } from '.';

export const useSession = () => {
  const { data, isLoading } = useQuery(apiKeys.session, getSession, {
    staleTime: 60 * 1000,
  });

  return {
    session: data?.data.session,
    error: data?.error,
    isLoading: isLoading,
  };
};
