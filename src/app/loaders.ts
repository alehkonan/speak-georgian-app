import { type LoaderFunction, redirect } from 'react-router-dom';
import { supabaseApi } from 'src/api/api';
import { paths } from './paths';

export const hasVisitedLoader: LoaderFunction = () => {
  const isVisited = localStorage.getItem('visited');
  if (!isVisited) return redirect(paths.welcome);
  return null;
};

export const protectedRouteLoader: LoaderFunction = async () => {
  const { data } = await supabaseApi.auth.getSession();
  if (!data.session) return redirect(paths.root);
  return null;
};

export const publicRouteLoader: LoaderFunction = async () => {
  const { data } = await supabaseApi.auth.getSession();
  if (data.session) return redirect(paths.root);
  return null;
};
