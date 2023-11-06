import { Button } from 'src/components/Button';
import { Divider } from 'src/components/Divider';
import { Screen } from 'src/components/Screen';

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
