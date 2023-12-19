import { Avatar, Button } from '@nextui-org/react';
import { UserRound } from 'lucide-react';
import { useLogout } from 'src/cache/auth/useLogout';
import { useGetUserStatistic } from 'src/cache/statistic/useGetUserStatistic';
import { useGetUser } from 'src/cache/user/useGetUser';
import { ProfileCard } from 'src/shared/components/ProfileCard';
import { Screen } from 'src/shared/components/Screen';
import { formatDate } from 'src/shared/utils/dates';

export const ProfileScreen = () => {
  const { data: user } = useGetUser();
  const { mutate: logout, isPending } = useLogout();
  const { data: statistic, isLoading } = useGetUserStatistic(user?.id);

  return (
    <Screen isLoading={isLoading}>
      <div className="grid auto-rows-min gap-4">
        <ProfileCard
          avatar={
            <Avatar icon={<UserRound />} src={user?.user_metadata.picture} />
          }
          title="Account info"
        >
          <span>Name: </span>
          <span>{user?.user_metadata.full_name}</span>
          <span>Created:</span>
          <span>{formatDate(user?.created_at)}</span>
          <span>Provider:</span>
          <span>{user?.app_metadata.provider}</span>
        </ProfileCard>
        {/* TODO enable when it's ready on BE */}
        {/* <ProfileCard title="Settings" edgeValues>
        <span>Show daily word:</span>
        <Switch />
        <Divider className="col-span-2" />
        <span>Show transcription: </span>
        <Switch />
        <Divider className="col-span-2" />
        <span>Show pictures in game mode:</span>
        <Switch />
      </ProfileCard> */}
        <ProfileCard title="Statistics" edgeValues>
          <span>Total words: </span>
          <span>{statistic?.total_words}</span>
          <span>Learned words: </span>
          <span>{statistic?.learned_words}</span>
          <span>Favorite words: </span>
          <span>{statistic?.favorite_words}</span>
        </ProfileCard>
      </div>
      <Button
        className="self-end"
        color="primary"
        isLoading={isPending}
        onClick={() => logout()}
      >
        Logout
      </Button>
    </Screen>
  );
};
