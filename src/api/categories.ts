import { apiKeys } from './apiKeys';
import { useQuery } from '@tanstack/react-query';
import { getCategories } from 'src/services/supabase';

export const useCategories = (userId?: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: apiKeys.categories(userId),
    queryFn: ({ queryKey: [, { userId }] }) => getCategories(userId),
  });

  return {
    categories: data,
    isLoading,
    error: error instanceof Error ? error : null,
  };
};
