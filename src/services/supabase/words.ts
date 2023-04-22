import { supabaseClient } from './client';

export type Word = {
  id: number;
  en: string;
  ka: string;
  transcription: string | null;
  categoryId: number | null;
  pictureUrl: string | null;
  soundUrl: string | null;
  isFavorite: boolean;
  isLearned: boolean;
};

const wordsSelector = () =>
  supabaseClient.from('words').select().order('name_en');

const userWordsSelector = (userId: string) =>
  supabaseClient
    .from('words')
    .select('*, favorites(is_favorite), statistics(is_learned)')
    .eq('favorites.user_id', userId)
    .eq('statistics.user_id', userId)
    .order('name_en');

const onlyFavoriteWordsSelector = (userId: string) =>
  supabaseClient
    .from('words')
    .select('*, favorites!inner(is_favorite), statistics(is_learned)')
    .eq('favorites.user_id', userId)
    .eq('statistics.user_id', userId)
    .eq('favorites.is_favorite', true)
    .order('name_en');

const onlyLearnedWordsSelector = (userId: string) =>
  supabaseClient
    .from('words')
    .select('*, favorites(is_favorite), statistics!inner(is_learned)')
    .eq('favorites.user_id', userId)
    .eq('statistics.user_id', userId)
    .order('name_en');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapWord = (word: any): Word => ({
  id: word.id,
  en: word.name_en,
  ka: word.name_ka,
  transcription: word.transcription,
  categoryId: word.category_id,
  pictureUrl: word.picture_url,
  soundUrl: word.sound_url,
  isFavorite: Array.isArray(word.favorites)
    ? Boolean(word.favorites.at(0)?.is_favorite)
    : false,
  isLearned: Array.isArray(word.statistics)
    ? Boolean(word.statistics.at(0)?.is_learned)
    : false,
});

export const getWordsCount = async () => {
  const { count, error } = await supabaseClient
    .from('words')
    .select('*', { head: true, count: 'exact' });

  if (error) {
    throw new Error(error.message, { cause: error });
  }

  return count || 0;
};

export const getNotLearnedWords = async (userId: string | undefined) => {
  const response = userId
    ? await userWordsSelector(userId)
    : await wordsSelector();

  if (response.error) {
    throw new Error(response.error.message, { cause: response.error });
  }

  return response.data?.map(mapWord).filter((word) => !word.isLearned);
};

export const getWord = async (wordId: number) => {
  const response = await wordsSelector().eq('id', wordId);

  if (response.error) {
    throw new Error(response.error.message, { cause: response.error });
  }

  return response.data?.map(mapWord).at(0);
};

export const getWordsByCategory = async (
  categoryId: number,
  userId?: string
) => {
  const selector = userId ? userWordsSelector(userId) : wordsSelector();
  const response = await selector.eq('category_id', categoryId);

  if (response.error) {
    throw new Error(response.error.message, { cause: response.error });
  }

  return response.data?.map(mapWord);
};

export const getWordsBySearchValue = async (
  searchValue: string,
  userId?: string
) => {
  const selector = userId ? userWordsSelector(userId) : wordsSelector();
  const res = await selector.ilike('name_en', `%${searchValue}%`);

  if (res.error) {
    throw new Error(res.error.message, { cause: res.error });
  }

  return res.data?.map(mapWord);
};

export const getFavoriteWords = async (userId: string) => {
  const response = await onlyFavoriteWordsSelector(userId);

  if (response.error) {
    throw new Error(response.error.message, { cause: response.error });
  }

  return response.data?.map(mapWord);
};

export const getLearnedWords = async (userId: string) => {
  const response = await onlyLearnedWordsSelector(userId);

  if (response.error) {
    throw new Error(response.error.message, { cause: response.error });
  }

  return response.data?.map(mapWord);
};
