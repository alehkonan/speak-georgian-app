import zod from 'zod';

export const CategorySchema = zod.object({
  id: zod.number(),
  name_en: zod.string(),
  name_ru: zod.string().nullable(),
  picture_url: zod.string().nullable(),
  created_at: zod.coerce.date(),
});

export type Category = zod.infer<typeof CategorySchema>;
