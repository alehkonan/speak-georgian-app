import { RouteObject } from 'react-router-dom';
import { paths } from './paths';

export const categories: RouteObject = {
  index: true,
  lazy: async () => {
    const { CategoriesScreen } = await import('../screens/Categories');
    return { Component: CategoriesScreen };
  },
};

export const category: RouteObject = {
  path: paths.category,
  lazy: async () => {
    const { WordsScreen } = await import('../screens/WordsScreen');
    return { Component: WordsScreen };
  },
};

export const favorites: RouteObject = {
  path: paths.favorites,
  lazy: async () => {
    const { FavoritesScreen } = await import('../screens/FavoritesScreen');
    return { Component: FavoritesScreen };
  },
};

export const forgotPassword: RouteObject = {
  path: paths.forgotPassword,
  lazy: async () => {
    const { ForgotPasswordScreen } = await import(
      '../screens/ForgotPasswordScreen'
    );
    return { Component: ForgotPasswordScreen };
  },
};

export const game: RouteObject = {
  path: paths.game,
  lazy: async () => {
    const { GameScreen } = await import('../screens/GameScreen');
    return { Component: GameScreen };
  },
};

export const login: RouteObject = {
  path: paths.login,
  lazy: async () => {
    const { LoginScreen } = await import('../screens/LoginScreen');
    return { Component: LoginScreen };
  },
};

export const profile: RouteObject = {
  path: paths.profile,
  lazy: async () => {
    const { ProfileScreen } = await import('../screens/ProfileScreen');
    return { Component: ProfileScreen };
  },
};

export const signup: RouteObject = {
  path: paths.signup,
  lazy: async () => {
    const { SignupScreen } = await import('../screens/SignupScreen');
    return { Component: SignupScreen };
  },
};

export const updatePassword: RouteObject = {
  path: paths.updatePassword,
  lazy: async () => {
    const { UpdatePasswordScreen } = await import(
      '../screens/UpdatePasswordScreen'
    );
    return { Component: UpdatePasswordScreen };
  },
};

export const welcome: RouteObject = {
  path: paths.welcome,
  lazy: async () => {
    const { WelcomeScreen } = await import('../screens/WelcomeScreen');
    return { Component: WelcomeScreen };
  },
};
