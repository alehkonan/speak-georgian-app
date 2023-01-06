import { apiKeys } from '.';
import { useQuery } from '@tanstack/react-query';
import { getAllWords, getWordsByCategory } from 'src/services/supabase';

export const useWords = (categoryId: number) => {
  const { data, isLoading, error } = useQuery(
    apiKeys.wordsByCategory(categoryId),
    () => getWordsByCategory(categoryId),
    {
      enabled: !isNaN(categoryId),
    }
  );

  return {
    words: data?.data,
    count: data?.count || 0,
    isLoading,
    error: error instanceof Error ? error : data?.error,
  };
};

export const useAllWords = () => {
  const { data, isLoading, error } = useQuery(apiKeys.words, getAllWords);

  return {
    words: data?.data || [],
    count: data?.data?.length || 0,
    isLoading,
    error: error instanceof Error ? error : data?.error,
  };
};
