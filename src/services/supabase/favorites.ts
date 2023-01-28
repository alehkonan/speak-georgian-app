import { supabaseClient } from './client';
import { getUserId } from './user';

const getWordIsFavorite = async (userId: string, wordId: number) => {
  const { data: wordsInFavorite } = await supabaseClient
    .from('favorites')
    .select()
    .eq('word_id', wordId)
    .eq('user_id', userId);

  return wordsInFavorite?.at(0);
};

export const setWordAsFavorite = async (wordId: number) => {
  const userId = await getUserId();
  const wordInFavorite = await getWordIsFavorite(userId, wordId);

  if (wordInFavorite) {
    const { data } = await supabaseClient
      .from('favorites')
      .update({
        id: wordInFavorite.id,
        is_favorite: !wordInFavorite.is_favorite,
      })
      .select()
      .single();

    return Boolean(data?.is_favorite);
  } else {
    const { data } = await supabaseClient
      .from('favorites')
      .insert({
        word_id: wordId,
        user_id: userId,
        is_favorite: true,
      })
      .select()
      .single();

    return Boolean(data?.is_favorite);
  }
};
