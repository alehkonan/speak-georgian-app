import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { logout } from 'src/api/auth/logout';
import { paths } from 'src/app/paths';
import { queryKeys } from '../keys';

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      navigate(paths.root);
      queryClient.setQueryData(queryKeys.user.details.queryKey, null);
    },
  });
};
