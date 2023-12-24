import { Avatar, Button } from '@nextui-org/react';
import { UserRound } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLogout } from 'src/cache/auth/useLogout';
import { useGetUserStatistic } from 'src/cache/statistic/useGetUserStatistic';
import { useGetUser } from 'src/cache/user/useGetUser';
import { LanguageSwitcher } from 'src/shared/components/LanguageSwitcher';
import { ProfileCard } from 'src/shared/components/ProfileCard';
import { Screen } from 'src/shared/components/Screen';
import { formatDate } from 'src/shared/utils/dates';

export const ProfileScreen = () => {
  const { t } = useTranslation();
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
          title={t('account.info')}
        >
          <span>{t('account.name')}: </span>
          <span>{user?.user_metadata.full_name}</span>
          <span>{t('account.created')}:</span>
          <span>{formatDate(user?.created_at)}</span>
          <span>{t('account.provider')}:</span>
          <span>{user?.app_metadata.provider}</span>
        </ProfileCard>
        <ProfileCard title={t('settings.title')} edgeValues>
          <span>{t('settings.language')}:</span>
          <LanguageSwitcher />
        </ProfileCard>
        <ProfileCard title={t('statistic.title')} edgeValues>
          <span>{t('statistic.totalWords')}: </span>
          <span>{statistic?.total_words}</span>
          <span>{t('statistic.learnedWords')}: </span>
          <span>{statistic?.learned_words}</span>
          <span>{t('statistic.favoriteWords')}: </span>
          <span>{statistic?.favorite_words}</span>
        </ProfileCard>
      </div>
      <Button
        className="self-end"
        color="primary"
        isLoading={isPending}
        onClick={() => logout()}
      >
        {t('auth.logout')}
      </Button>
    </Screen>
  );
};
