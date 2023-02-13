import { apiKeys } from './apiKeys';
import { useQuery } from '@tanstack/react-query';
import {
  getFavoriteWords,
  getNotLearnedWords,
  getWordsByCategory,
  getWordsBySearchValue,
  getWordsCount,
} from 'src/services/supabase';

export const useWordsCount = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: apiKeys.wordsCount,
    queryFn: getWordsCount,
  });

  return {
    count: data,
    isLoading,
    error: error instanceof Error ? error : null,
  };
};

export const useNotLearnedWords = (userId?: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: apiKeys.notLearnedWords,
    queryFn: () => getNotLearnedWords(userId),
    enabled: Boolean(userId),
  });

  return {
    words: data,
    count: data?.length || 0,
    isLoading,
    error: error instanceof Error ? error : null,
  };
};

export const useCategoryWords = (categoryId: number, userId?: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: apiKeys.wordsByCategory(categoryId),
    queryFn: () => getWordsByCategory(categoryId, userId),
    enabled: !isNaN(categoryId),
  });

  return {
    words: data,
    count: data?.length || 0,
    isLoading,
    error: error instanceof Error ? error : null,
  };
};

export const useSearchWords = (searchValue: string, userId?: string) => {
  const { data, isFetching, error } = useQuery({
    queryKey: apiKeys.wordsBySearch(searchValue),
    queryFn: ({ queryKey: [, { search }] }) =>
      getWordsBySearchValue(search as string, userId),
    enabled: Boolean(searchValue.trim()),
  });

  return {
    results: data,
    isSearching: isFetching,
    error: error instanceof Error ? error : null,
  };
};

export const useFavoriteWords = (userId?: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: apiKeys.favoriteWords,
    queryFn: () => getFavoriteWords(userId!),
    enabled: Boolean(userId),
  });

  return {
    words: data,
    isLoading,
    error: error instanceof Error ? error : null,
  };
};
