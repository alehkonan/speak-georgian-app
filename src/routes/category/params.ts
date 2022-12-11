export const categoryParams = {
  id: 'id',
} as const;

export type CategoryParams = keyof typeof categoryParams;
