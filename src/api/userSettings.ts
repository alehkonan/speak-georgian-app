import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getUserSettings, updateUserSettings } from 'src/services/supabase';
import { apiKeys } from '.';

export const useGetUserSettings = () => {
  const { data: settings, isLoading } = useQuery({
    queryKey: apiKeys.userSettings,
    queryFn: getUserSettings,
  });

  return {
    settings,
    isGettingSettings: isLoading,
  };
};

export const useUpdateUserSettings = () => {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: updateUserSettings,
    onSuccess: () => queryClient.invalidateQueries(apiKeys.userSettings),
  });

  return {
    updateSettings: mutate,
    isUpdatingSettings: isLoading,
  };
};
