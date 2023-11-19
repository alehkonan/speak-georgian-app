import { Button } from '@nextui-org/react';
import { useLogout } from 'src/cache/auth/useLogout';
import { Divider } from 'src/shared/components/Divider';
import { Screen } from 'src/shared/components/Screen';

import { UserInfo } from '../widgets/UserInfo';
import { UserSettings } from '../widgets/UserSettings';
import { UserStatistics } from '../widgets/UserStatistics';

export const ProfileScreen = () => {
  const { mutate: logout, isPending } = useLogout();

  return (
    <Screen>
      <div className="p-5">
        <UserInfo />
        <Divider text="user settings" />
        <UserSettings />
        <Divider text="Statistics" />
        <UserStatistics />
        <Divider />
        <Button color="primary" isLoading={isPending} onClick={() => logout()}>
          Logout
        </Button>
      </div>
    </Screen>
  );
};
