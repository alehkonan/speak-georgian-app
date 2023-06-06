import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './layout';
import { params, routes } from './routes';
import { useSession } from 'src/api/session';

const HomeScreen = lazy(() => import('./screens/home'));
const CategoryScreen = lazy(() => import('./screens/category'));
const FavoritesScreen = lazy(() => import('./screens/favorites'));
const ForgotPasswordScreen = lazy(() => import('./screens/forgot-password'));
const GameScreen = lazy(() => import('./screens/game'));
const LoginScreen = lazy(() => import('./screens/login'));
const NotFoundScreen = lazy(() => import('./screens/notFound'));
const PhrasesScreen = lazy(() => import('./screens/phrases'));
const ProfileScreen = lazy(() => import('./screens/profile'));
const SignupScreen = lazy(() => import('./screens/signup'));
const UpdatePasswordScreen = lazy(() => import('./screens/update-password'));
const VerbsScreen = lazy(() => import('./screens/verbs'));
const WelcomeScreen = lazy(() => import('./screens/welcome'));
const WordCategoriesScreen = lazy(() => import('./screens/categories'));

export const App = () => {
  const { session } = useSession();

  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path={routes.welcome} element={<WelcomeScreen />} />
          <Route element={<Layout />}>
            <Route index element={<HomeScreen />} />
            <Route path={routes.verbs} element={<VerbsScreen />} />
            <Route path={routes.phrases} element={<PhrasesScreen />} />
            <Route path={routes.category}>
              <Route index element={<WordCategoriesScreen />} />
              <Route path={params.id} element={<CategoryScreen />} />
            </Route>

            {!session && (
              <>
                <Route path={routes.login} element={<LoginScreen />} />
                <Route path={routes.signup} element={<SignupScreen />} />
                <Route path={routes.forgotPassword} element={<ForgotPasswordScreen />} />
                <Route path={routes.updatePassword} element={<UpdatePasswordScreen />} />
              </>
            )}
            {session && (
              <>
                <Route path={routes.game} element={<GameScreen />} />
                <Route path={routes.favorites} element={<FavoritesScreen />} />
                <Route path={routes.profile} element={<ProfileScreen />} />
              </>
            )}
            <Route path="*" element={<NotFoundScreen />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
