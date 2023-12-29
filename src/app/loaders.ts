import { type LoaderFunction, redirect } from 'react-router-dom';
import { supabaseApi } from 'src/api/api';
import { useUserStore } from 'src/auth/useUser';
import { paths } from './paths';

export const rootLoader: LoaderFunction = async () => {
  const isVisited = localStorage.getItem('visited');
  const userState = useUserStore.getState();
  if (userState.user) return null;
  const { data } = await supabaseApi.auth.getUser();
  if (!data.user) return isVisited ? null : redirect(paths.welcome);
  userState.setUser({
    id: data.user.id,
    name: data.user.user_metadata.full_name,
    pictureUrl: data.user.user_metadata.picture,
    created: data.user.created_at,
    provider: data.user.app_metadata.provider,
  });
  return isVisited ? null : redirect(paths.welcome);
};

export const protectedRouteLoader: LoaderFunction = async () => {
  const { data } = await supabaseApi.auth.getSession();
  return data.session ? null : redirect(paths.root);
};

export const publicRouteLoader: LoaderFunction = async () => {
  const { data } = await supabaseApi.auth.getSession();
  return data.session ? redirect(paths.root) : null;
};
