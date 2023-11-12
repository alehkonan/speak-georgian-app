import zod from 'zod';

export const WordSchema = zod.object({
  id: zod.number(),
  name_en: zod.string(),
  name_ka: zod.string(),
  transcription: zod.string().nullish(),
  category_id: zod.number(),
  picture_url: zod.string().nullish(),
  created_at: zod.string().datetime({ offset: true }),
});

export type Word = zod.infer<typeof WordSchema>;
