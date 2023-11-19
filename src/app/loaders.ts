import { type LoaderFunction, redirect } from 'react-router-dom';

import { paths } from './paths';

export const checkIfVisited: LoaderFunction = () => {
  const isVisited = localStorage.getItem('visited');
  if (!isVisited) return redirect(paths.welcome);
  return null;
};
