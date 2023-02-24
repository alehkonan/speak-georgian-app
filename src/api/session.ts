import { useQuery } from '@tanstack/react-query';
import { getSession } from 'src/services/supabase';
import { apiKeys } from './apiKeys';

export const useSession = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: apiKeys.session,
    queryFn: getSession,
  });

  return {
    session: data,
    isLoading,
    error: error instanceof Error ? error : undefined,
  };
};
