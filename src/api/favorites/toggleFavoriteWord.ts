import { boolean } from 'zod';

import { supabaseApi } from '../api';

type Params = {
  userId: string;
  wordId: number;
};

export const toggleFavoriteWord = async ({ userId, wordId }: Params) => {
  const { data, error } = await supabaseApi.rpc('toggle_favorite_word', {
    user_id_input: userId,
    word_id_input: wordId,
  });

  if (error) throw error;

  return boolean().parse(data);
};
