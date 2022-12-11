import { supabaseClient } from './../services/supabase/index';
import { apiKeys } from '.';
import { useQuery } from '@tanstack/react-query';

export const useWords = (categoryId: number) => {
  const { data, isLoading } = useQuery(
    apiKeys.wordsByCategory(categoryId),
    async () =>
      await supabaseClient.from('words').select().eq('category_id', categoryId),
    {
      enabled: !isNaN(categoryId),
    }
  );

  return {
    words: data?.data,
    error: data?.error,
    isLoading,
  };
};
