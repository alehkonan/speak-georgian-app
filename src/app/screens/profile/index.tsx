import { Divider } from 'src/shared/components';
import { Logout } from './Logout';
import { UserInfo } from './UserInfo';
import { UserSettings } from './UserSettings';
import { UserStatistics } from './UserStatistics';

export const ProfileScreen = () => {
  return (
    <div className="grid gap-2">
      <UserInfo />
      <Divider text="user settings" />
      <UserSettings />
      <Divider text="Statistics" />
      <UserStatistics />
      <Divider />
      <Logout />
    </div>
  );
};
