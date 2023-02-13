import { useQuery } from '@tanstack/react-query';
import { getUser } from 'src/services/supabase';
import { apiKeys } from './apiKeys';

export const useUser = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: apiKeys.user,
    queryFn: getUser,
  });

  return {
    user: data,
    isLoading,
    error: error instanceof Error ? error : null,
  };
};
