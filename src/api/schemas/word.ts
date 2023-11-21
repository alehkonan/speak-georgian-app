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

export const GameWordSchema = zod.object({
  name_en: zod.string(),
  name_ka: zod.string(),
  picture_url: zod.string().nullable(),
  variants: zod.array(zod.string()),
});

export type Word = zod.infer<typeof WordSchema>;
export type GameWord = zod.infer<typeof GameWordSchema>;
