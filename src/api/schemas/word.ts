import zod from 'zod';

export const WordSchema = zod.object({
  id: zod.number(),
  name_en: zod.string(),
  transcription_en: zod.string().nullable(),
  name_ka: zod.string(),
  category_id: zod.number().nullable(),
  picture_url: zod.string().nullable(),
  created_at: zod.coerce.date(),
});

export const GameWordSchema = zod.object({
  name_en: zod.string(),
  name_ka: zod.string(),
  picture_url: zod.string().nullable(),
  variants: zod.array(zod.string()),
});

export type Word = zod.infer<typeof WordSchema>;
export type GameWord = zod.infer<typeof GameWordSchema>;
