import { apiKeys } from '.';
import { useQuery } from '@tanstack/react-query';
import { getWordsByCategory } from 'src/services/supabase';

export const useWords = (categoryId: number) => {
  const { data, isLoading } = useQuery(
    apiKeys.wordsByCategory(categoryId),
    () => getWordsByCategory(categoryId),
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
