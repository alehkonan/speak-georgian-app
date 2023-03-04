import {
  createBrowserRouter,
  createRoutesFromElements,
  LoaderFunction,
  redirect,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { getSession } from 'src/services/supabase';
import { Layout } from './layout';
import { params } from './params';
import { routes } from './routes';
import { CategoryScreen } from './screens/category';
import { FavoritesScreen } from './screens/favorites';
import { ForgotPasswordScreen } from './screens/forgot-password';
import { GameScreen } from './screens/game';
import { HomeScreen } from './screens/home';
import { LoginScreen } from './screens/login';
import { NotFoundScreen } from './screens/notFound';
import { PhrasesScreen } from './screens/phrases';
import { ProfileScreen } from './screens/profile';
import { SignupScreen } from './screens/signup';
import { UpdatePasswordScreen } from './screens/update-password';
import { VerbsScreen } from './screens/verbs';
import { WelcomeScreen } from './screens/welcome';
import { WordsScreen } from './screens/words';

const publicRouteLoader: LoaderFunction = async () => {
  const session = await getSession();
  return session && redirect(routes.home);
};

const privateRouteLoader: LoaderFunction = async () => {
  const session = await getSession();
  return !session && redirect(routes.welcome);
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={routes.welcome} element={<WelcomeScreen />} />

      <Route element={<Layout />}>
        {/* common routes */}
        <Route>
          <Route index element={<HomeScreen />} />
          <Route path={routes.verbs} element={<VerbsScreen />} />
          <Route path={routes.phrases} element={<PhrasesScreen />} />
          <Route path={routes.words} element={<WordsScreen />} />
          <Route
            path={`${routes.category}/:${params.id}`}
            element={<CategoryScreen />}
          />
        </Route>
        {/* public routes */}
        <Route loader={publicRouteLoader}>
          <Route path={routes.login} element={<LoginScreen />} />
          <Route path={routes.signup} element={<SignupScreen />} />
          <Route
            path={routes.forgotPassword}
            element={<ForgotPasswordScreen />}
          />
          <Route
            path={routes.updatePassword}
            element={<UpdatePasswordScreen />}
          />
        </Route>
        {/* private routes */}
        <Route loader={privateRouteLoader}>
          <Route path={routes.game} element={<GameScreen />} />
          <Route path={routes.favorites} element={<FavoritesScreen />} />
          <Route path={routes.profile} element={<ProfileScreen />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundScreen />} />
    </Route>
  )
);

export const App = () => {
  return <RouterProvider router={router} />;
};
