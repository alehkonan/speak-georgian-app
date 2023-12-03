import zod from 'zod';

export const WordStatisticSchema = zod.object({
  id: zod.number(),
  right_answers: zod.number(),
  wrong_answers: zod.number(),
  is_learned: zod.boolean(),
});

export type WordStatistic = zod.infer<typeof WordStatisticSchema>;
