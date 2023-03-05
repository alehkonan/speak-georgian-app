import { useQuery } from '@tanstack/react-query';
import { getVerbs } from 'src/services/supabase';
import { apiKeys } from './apiKeys';

export const useVerbs = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: apiKeys.verbs,
    queryFn: getVerbs,
  });

  return {
    verbs: data,
    isLoading,
    error: error instanceof Error ? error : null,
  };
};
