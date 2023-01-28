import { supabaseClient } from './client';
import { getUserId } from './user';

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

const wordsSelector = (userId: string) =>
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
  const response = await supabaseClient
    .from('words')
    .select('*', { head: true, count: 'exact' });

  return response.count;
};

export const getAllWords = async () => {
  const userId = await getUserId();
  const response = await wordsSelector(userId);

  return response.data?.map(mapWord);
};

export const getWord = async (wordId: number) => {
  const userId = await getUserId();
  const response = await wordsSelector(userId).eq('id', wordId);

  return response.data?.map(mapWord).at(0);
};

export const getWordsByCategory = async (categoryId: number) => {
  const userId = await getUserId();
  const response = await wordsSelector(userId).eq('category_id', categoryId);

  if (response.error) {
    throw new Error(response.error.message, { cause: response.error });
  }

  return response.data?.map(mapWord);
};

export const getWordsBySearchValue = async (searchValue: string) => {
  const userId = await getUserId();
  const res = await wordsSelector(userId).ilike('name_en', `%${searchValue}%`);

  if (res.error) {
    throw new Error(res.error.message, { cause: res.error });
  }

  return res.data?.map(mapWord);
};

export const getFavoriteWords = async () => {
  const userId = await getUserId();
  const response = await onlyFavoriteWordsSelector(userId);

  if (response.error) {
    throw new Error(response.error.message, { cause: response.error });
  }

  return response.data?.map(mapWord);
};

export const getLearnedWords = async () => {
  const userId = await getUserId();
  const response = await onlyLearnedWordsSelector(userId);

  if (response.error) {
    throw new Error(response.error.message, { cause: response.error });
  }

  return response.data?.map(mapWord);
};
