import { Avatar, Button, Switch } from '@nextui-org/react';
import format from 'date-fns/format';
import { PersonIcon } from 'src/assets/icons';
import { useLogout } from 'src/cache/auth/useLogout';
import { useGetUser } from 'src/cache/user/useGetUser';
import { ProfileWidget } from 'src/shared/components/ProfileWidget';
import { Screen } from 'src/shared/components/Screen';

export const ProfileScreen = () => {
  const { data: user } = useGetUser();
  const { mutate: logout, isPending } = useLogout();

  return (
    <Screen>
      <ProfileWidget
        avatar={
          <Avatar icon={<PersonIcon />} src={user?.user_metadata.picture} />
        }
        title="Account info"
      >
        <span>Name: </span>
        <span>{user?.user_metadata.full_name}</span>
        <span>Created:</span>
        <span>{format(new Date(user?.created_at ?? ''), 'dd.MM.yyyy')}</span>
        <span>Provider:</span>
        <span>{user?.app_metadata.provider}</span>
      </ProfileWidget>
      <ProfileWidget title="Settings">
        <span>Show daily word:</span>
        <Switch />
        <span>Show transcription: </span>
        <Switch />
        <span>Show pictures in game mode:</span>
        <Switch />
      </ProfileWidget>
      <ProfileWidget title="Statistics">
        <span>Total words: </span>
        <span>{102}</span>
        <span>Learned words: </span>
        <span>{12}</span>
        <span>Favorite words: </span>
        <span>{10}</span>
      </ProfileWidget>
      <Button color="primary" isLoading={isPending} onClick={() => logout()}>
        Logout
      </Button>
    </Screen>
  );
};
