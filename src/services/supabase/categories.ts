import { supabaseClient } from './client';
import { getUserStatistics } from './statistics';

export type Category = {
  id: number;
  name: string;
  pictureUrl: string | null;
  soundUrl: string | null;
  wordIds: number[];
  wordsLearned?: number;
};

const mapCategory = (category: any): Category => ({
  id: category.id,
  name: category.name,
  pictureUrl: category.picture_url,
  soundUrl: category.sound_url,
  wordIds: category.words.map((word: { id: number } | null) => word?.id),
});

export const getCategories = async (userId?: string) => {
  const { data, error } = await supabaseClient
    .from('categories')
    .select('*, words(id)')
    .order('name');

  if (error) {
    throw new Error(error.message, { cause: error });
  }

  const categories = data.map(mapCategory);

  if (!userId) return categories;

  const statistics = await getUserStatistics(userId);

  return categories.map(({ wordIds, ...category }) => {
    const categoryStatistic = statistics.filter(({ word_id }) =>
      wordIds.includes(word_id)
    );
    const wordsLearned = categoryStatistic.reduce(
      (prev, acc) => (acc.is_learned ? prev + 1 : prev),
      0
    );

    return {
      ...category,
      wordIds,
      wordsLearned,
    };
  });
};
