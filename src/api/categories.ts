import { apiKeys } from '.';
import { useQuery } from '@tanstack/react-query';
import { getCategories } from 'src/services/supabase';
import { useMemo } from 'react';
import { useGetStatistics } from './statistics';

export const useCategories = () => {
  const categoriesQuery = useQuery(apiKeys.categories, getCategories);

  const { statistics, error, isLoading } = useGetStatistics();

  const categories = useMemo(() => {
    if (!categoriesQuery.data && !statistics) return [];

    return categoriesQuery.data?.map(({ words: wordIds, ...category }) => {
      const words = Array.isArray(wordIds) ? wordIds : [];
      const categoryStatistics = statistics?.filter(({ word_id }) =>
        words.find(({ id }) => id === word_id)
      );
      const learnedWordsCount =
        categoryStatistics?.reduce((prev, acc) => {
          return acc.is_learned ? prev + 1 : prev;
        }, 0) || 0;

      return {
        ...category,
        learnedWordsCount,
        wordsCount: words.length,
      };
    });
  }, [categoriesQuery, statistics]);

  const anyError = categoriesQuery.error || error;

  return {
    categories,
    error: anyError instanceof Error ? anyError : null,
    isLoading: categoriesQuery.isLoading || isLoading,
  };
};
