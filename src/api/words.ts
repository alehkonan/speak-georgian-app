import { apiKeys } from '.';
import { useQuery } from '@tanstack/react-query';
import {
  getFavoriteWords,
  getNotLearnedWords,
  getWordsByCategory,
  getWordsBySearchValue,
} from 'src/services/supabase';

export const useNotLearnedWords = () => {
  const query = useQuery({
    queryKey: apiKeys.notLearnedWords,
    queryFn: getNotLearnedWords,
  });

  return {
    words: query.data,
    count: query.data?.length || 0,
    isLoading: query.isLoading,
    error: query.error instanceof Error ? query.error : null,
  };
};

export const useCategoryWords = (categoryId: number) => {
  const query = useQuery({
    queryKey: apiKeys.wordsByCategory(categoryId),
    queryFn: () => getWordsByCategory(categoryId),
    enabled: !isNaN(categoryId),
  });

  return {
    words: query.data,
    count: query.data?.length || 0,
    isLoading: query.isLoading,
    error: query.error instanceof Error ? query.error : null,
  };
};

export const useSearchWords = (searchValue: string) => {
  const { data, isFetching } = useQuery({
    queryKey: apiKeys.wordsBySearch(searchValue),
    queryFn: ({ queryKey: [, { search }] }) =>
      getWordsBySearchValue(search as string),
    enabled: Boolean(searchValue.trim()),
  });

  return {
    results: data,
    isSearching: isFetching,
  };
};

export const useFavoriteWords = () => {
  const query = useQuery({
    queryKey: apiKeys.favoriteWords,
    queryFn: getFavoriteWords,
  });

  return {
    words: query.data,
    isLoading: query.isLoading,
    error: query.error instanceof Error ? query.error : null,
  };
};
