import format from 'date-fns/format';
import { useUser } from 'src/api/user';
import { useUserSettings } from 'src/api/userSettings';
import { useLogout } from 'src/features/logout';
import { Button, Divider, Switch } from 'src/shared/components';
import { LoaderIcon } from 'src/shared/icons';

export const ProfileScreen = () => {
  const { user, isLoading: isLoadingUser } = useUser();
  const { onLogout, isLoading } = useLogout();
  const { settings, isLoading: isLoadingSettings } = useUserSettings();

  if (isLoadingUser || isLoadingSettings) {
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
        <img
          className="w-10 aspect-square rounded-full"
          src={user?.user_metadata.picture}
          alt="user avatar"
        />
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
        <span className="col-span-2">Show daily word</span>
        <Switch enabled={settings?.shouldShowDailyWord} />
        <span className="col-span-2">Show translation by default</span>
        <Switch enabled={settings?.shouldShowTranslation} />
        <span className="col-span-2">Show pictures in game mode</span>
        <Switch enabled={settings?.shouldShowPictureInGame} />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <Divider className="col-span-3" text="Statistics" />
        <span className="col-span-2">Total words in the app</span>
        <span>1000</span>
        <span className="col-span-2">Learned words</span>
        <span>10</span>
        <span className="col-span-2">Favorites words</span>
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
