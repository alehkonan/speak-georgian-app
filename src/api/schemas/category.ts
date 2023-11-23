import zod from 'zod';

export const CategorySchema = zod.object({
  id: zod.number(),
  name_en: zod.string(),
  picture_url: zod.string().nullable(),
  created_at: zod.string().datetime(),
});

export type Category = zod.infer<typeof CategorySchema>;
