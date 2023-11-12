import zod from 'zod';

export const CategorySchema = zod.object({
  id: zod.number(),
  name: zod.string(),
  picture_url: zod.string().nullish(),
  created_at: zod.string().datetime({ offset: true }),
});

export type Category = zod.infer<typeof CategorySchema>;
