import format from 'date-fns/format';
import { useUser } from 'src/api/user';
import { useLogout } from 'src/features/logout';
import { Button, Divider, Switch } from 'src/shared/components';

export const ProfileScreen = () => {
  const { user } = useUser();
  const { onLogout, isLoading } = useLogout();

  console.log(user);

  return (
    <div className="text-lg text-raisin-black">
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
      <Divider text="user information" />
      <div className="grid grid-cols-2 gap-2">
        <span>Account created at</span>
        <span>{user && format(new Date(user.created_at), 'dd MMM yyyy')}</span>
        <span>Account provider</span>
        <span>{user?.app_metadata.provider}</span>
        <span>Role</span>
        <span>{user?.role}</span>
      </div>
      <Divider text="user settings" />
      <div className="grid grid-cols-2 gap-2">
        <span>Show daily word</span>
        <Switch enabled />
        <span>Show translation by default</span>
        <Switch />
        <span>Show pictures in game mode</span>
        <Switch />
      </div>
      <Divider text="Statistics" />
      <div className="grid grid-cols-2 gap-2">
        <span>Total words in the app</span>
        <span>1000</span>
        <span>Learned words</span>
        <span>10</span>
        <span>Favorites words</span>
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
