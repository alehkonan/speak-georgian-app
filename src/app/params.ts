export const params = {
  id: 'id',
} as const;

export type RouteParam = keyof typeof params;
