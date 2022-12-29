import { apiKeys } from '.';
import { useQuery } from '@tanstack/react-query';
import { getCategories } from 'src/services/supabase';

export const useCategories = () => {
  const { data, isLoading } = useQuery(apiKeys.categories, getCategories);

  return {
    categories: data?.data,
    error: data?.error,
    isLoading,
  };
};
