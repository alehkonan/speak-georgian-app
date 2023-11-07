export const routes = {
  root: '/',
  welcome: '/welcome',
  login: '/login',
  signup: '/signup',
  forgotPassword: '/forgot-password',
  updatePassword: '/update-password',
  verbs: '/verbs',
  phrases: '/phrases',
  category: '/category',
  game: '/game',
  favorites: '/favorites',
  profile: '/profile',
} as const;

export const params = {
  id: ':id',
} as const;

export type RouteParam = keyof typeof params;
