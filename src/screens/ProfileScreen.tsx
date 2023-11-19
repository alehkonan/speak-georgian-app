import { Button } from 'src/shared/components/Button';
import { Divider } from 'src/shared/components/Divider';
import { Screen } from 'src/shared/components/Screen';

import { UserInfo } from '../widgets/UserInfo';
import { UserSettings } from '../widgets/UserSettings';
import { UserStatistics } from '../widgets/UserStatistics';

export const ProfileScreen = () => {
  return (
    <Screen title="Profile">
      <UserInfo />
      <Divider text="user settings" />
      <UserSettings />
      <Divider text="Statistics" />
      <UserStatistics />
      <Divider />
      <Button>Logout</Button>
    </Screen>
  );
};
