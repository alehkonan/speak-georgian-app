import { useQuery } from '@tanstack/react-query';
import { apiKeys } from '.';

export const useAuth = () => {
  const { data } = useQuery(apiKeys.auth, () =>
    fetch('/').then((res) => res.json())
  );

  const token = data?.token;

  return {
    isAuthenticated: Boolean(token),
  };
};
