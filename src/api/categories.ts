import { supabaseClient } from './../services/supabase/index';
import { apiKeys } from '.';
import { useQuery } from '@tanstack/react-query';

export const useCategories = () => {
  const { data, isLoading } = useQuery(
    apiKeys.categories,
    async () => await supabaseClient.from('categories').select()
  );

  return {
    categories: data?.data,
    error: data?.error,
    isLoading,
  };
};
