import { apiKeys } from '.';
import { useQuery } from '@tanstack/react-query';
import {
  getAllWords,
  getWordsByCategory,
  getWordsBySearchValue,
} from 'src/services/supabase';

export const useWords = (categoryId: number) => {
  const {
    data: words,
    isLoading,
    error,
  } = useQuery(
    apiKeys.wordsByCategory(categoryId),
    () => getWordsByCategory(categoryId),
    {
      enabled: !isNaN(categoryId),
    }
  );

  return {
    words,
    count: words?.length || 0,
    isLoading,
    error: error instanceof Error ? error : null,
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

export const useSearchWords = (searchValue: string) => {
  const { data, isFetching } = useQuery({
    queryKey: apiKeys.wordsBySearch(searchValue),
    queryFn: ({ queryKey: [, , { search }] }) =>
      getWordsBySearchValue(search as string),
    enabled: Boolean(searchValue.trim()),
  });

  return {
    results: data,
    isSearching: isFetching,
  };
};
