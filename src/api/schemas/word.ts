import zod from 'zod';

export const WordSchema = zod.object({
  id: zod.number(),
  name_ka: zod.string(),
  name_en: zod.string(),
  name_ru: zod.string().nullable(),
  transcription_en: zod.string().nullable(),
  category_id: zod.number().nullable(),
  picture_url: zod.string().nullable(),
  is_favorite: zod.boolean().nullish(),
  is_learned: zod.boolean().nullish(),
  created_at: zod.coerce.date(),
});

export const WordFormSchema = zod.object({
  name_ka: zod.string().regex(/^[ა-ჰ]+$/, 'Enter georgian word'),
  name_en: zod.string().regex(/^[A-Za-z]+$/, 'Enter english translation'),
  transcription_en: zod
    .string()
    .regex(/^[A-Za-z-]*$/, 'Enter english transcription'),
  name_ru: zod.string().regex(/^[А-Яа-я]*$/, 'Enter russian translation'),
  category_id: zod.string().transform((id) => Number(id) || undefined),
  picture_url: zod.string().optional(),
});

export const GameWordSchema = zod.object({
  id: zod.number(),
  name_en: zod.string(),
  name_ka: zod.string(),
  picture_url: zod.string().nullable(),
  variants: zod.array(zod.string()),
});

export type Word = zod.infer<typeof WordSchema>;
export type WordForm = zod.infer<typeof WordFormSchema>;
export type GameWord = zod.infer<typeof GameWordSchema>;
