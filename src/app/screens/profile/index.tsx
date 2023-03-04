import { Divider, Screen } from 'src/shared/components';
import { Logout } from './Logout';
import { UserInfo } from './UserInfo';
import { UserSettings } from './UserSettings';
import { UserStatistics } from './UserStatistics';

export const ProfileScreen = () => {
  return (
    <Screen name="Profile">
      <UserInfo />
      <Divider text="user settings" />
      <UserSettings />
      <Divider text="Statistics" />
      <UserStatistics />
      <Divider />
      <Logout />
    </Screen>
  );
};
