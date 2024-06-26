import zod from 'zod';

const StatementSchema = zod.object({
	description: zod.string(),
	example: zod.string(),
});

export const RuleSchema = zod.object({
	title: zod.string(),
	statements: zod.array(StatementSchema),
});
