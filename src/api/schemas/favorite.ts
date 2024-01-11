import zod from 'zod';

export const FavoriteWordSchema = zod.object({
  id: zod.number(),
  user_id: zod.string(),
  word_id: zod.number(),
  is_favorite: zod.boolean(),
});
