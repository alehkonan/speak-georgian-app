import { apiKeys } from '.';
import { useQuery } from '@tanstack/react-query';
import { getCategories, getUserStatistics } from 'src/services/supabase';
import { useMemo } from 'react';

export const useCategories = () => {
  const categoriesQuery = useQuery(apiKeys.categories, getCategories);

  const statisticsQuery = useQuery({
    queryKey: apiKeys.userStatistics,
    queryFn: getUserStatistics,
  });

  const categories = useMemo(() => {
    if (!categoriesQuery.data && !statisticsQuery.data) return [];

    return categoriesQuery.data?.map(({ words: wordIds, ...category }) => {
      const words = Array.isArray(wordIds) ? wordIds : [];
      const categoryStatistics = statisticsQuery.data?.filter(({ word_id }) =>
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
  }, [categoriesQuery, statisticsQuery]);

  const error = categoriesQuery.error || statisticsQuery.error;

  return {
    categories,
    error: error instanceof Error ? error : null,
    isLoading: categoriesQuery.isLoading || statisticsQuery.isLoading,
  };
};
