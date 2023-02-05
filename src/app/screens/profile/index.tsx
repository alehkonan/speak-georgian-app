import format from 'date-fns/format';
import { useUser } from 'src/api/user';
import {
  useUpdateUserSettings,
  useGetUserSettings,
} from 'src/api/userSettings';
import { useLogout } from 'src/features/logout';
import { Button, Divider, Switch } from 'src/shared/components';
import { LoaderIcon } from 'src/shared/icons';

export const ProfileScreen = () => {
  const { user, isLoading: isLoadingUser } = useUser();
  const { onLogout, isLoading } = useLogout();
  const { settings, isGettingSettings } = useGetUserSettings();
  const { updateSettings, isUpdatingSettings } = useUpdateUserSettings();

  if (isLoadingUser || isGettingSettings) {
    return (
      <div className="h-full grid place-items-center">
        <LoaderIcon className="text-maize w-10 h-10" />
      </div>
    );
  }

  return (
    <div className="text-lg text-raisin-black flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold">
          {user?.user_metadata.full_name}
        </span>
        {user?.user_metadata.picture && (
          <img
            className="w-10 aspect-square rounded-full"
            src={user.user_metadata.picture}
            alt="user avatar"
          />
        )}
      </div>
      <div className="grid grid-cols-2 gap-2">
        <span>Account created at</span>
        <span>{user && format(new Date(user.created_at), 'dd MMM yyyy')}</span>
        <span>Account provider</span>
        <span>{user?.app_metadata.provider}</span>
        <span>Role</span>
        <span>{user?.role}</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <Divider className="col-span-3" text="user settings" />
        <span className="col-span-2">Show daily word on the home screen</span>
        <Switch
          enabled={settings?.shouldShowDailyWord}
          onSwitch={(checked) =>
            settings &&
            updateSettings({
              settingId: settings.settingId,
              shouldShowDailyWord: checked,
            })
          }
          disabled={isUpdatingSettings}
        />
        <span className="col-span-2">Show transcription for words</span>
        <Switch
          enabled={settings?.shouldShowTranscription}
          onSwitch={(checked) =>
            settings &&
            updateSettings({
              settingId: settings.settingId,
              shouldShowTranscription: checked,
            })
          }
          disabled={isUpdatingSettings}
        />
        <span className="col-span-2">Always show pictures in game mode</span>
        <Switch
          enabled={settings?.shouldShowPictureInGame}
          onSwitch={(checked) =>
            settings &&
            updateSettings({
              settingId: settings.settingId,
              shouldShowPictureInGame: checked,
            })
          }
          disabled={isUpdatingSettings}
        />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <Divider className="col-span-3" text="Statistics" />
        <span className="col-span-2">Total words in the app</span>
        <span>1000</span>
        <span className="col-span-2">Learned words</span>
        <span>10</span>
        <span className="col-span-2">Favorite words</span>
        <span>13</span>
      </div>
      <div className="flex justify-center mt-2">
        <Button onClick={() => onLogout()} disabled={isLoading}>
          Logout
        </Button>
      </div>
    </div>
  );
};
