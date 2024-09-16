import { Avatar, Button } from '@nextui-org/react';
import { createFileRoute } from '@tanstack/react-router';
import { UserRound } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLogout } from 'src/cache/auth/useLogout';
import { useGetUserStatistic } from 'src/cache/statistic/useGetUserStatistic';
import { LanguageSwitcher } from 'src/components/LanguageSwitcher';
import { ProfileCard } from 'src/components/ProfileCard';
import { Screen } from 'src/components/Screen';
import { useUserStore } from 'src/store/user';
import { formatDate } from 'src/utils/dates';

export const Route = createFileRoute('/_layout/(private)/profile')({
	component: ProfileScreen,
});

function ProfileScreen() {
	const { t } = useTranslation();
	const { user } = useUserStore();
	const { mutate: logout, isPending } = useLogout();
	const { data: statistic, isLoading } = useGetUserStatistic(user?.id);

	return (
		<Screen isLoading={isLoading}>
			<div className="grid auto-rows-min gap-4">
				<ProfileCard
					avatar={<Avatar icon={<UserRound />} src={user?.pictureUrl} />}
					title={t('account.info')}
				>
					<span>{t('account.name')}: </span>
					<span>{user?.name}</span>
					<span>{t('account.created')}:</span>
					<span>{formatDate(user?.created)}</span>
					<span>{t('account.provider')}:</span>
					<span>{user?.provider}</span>
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
}
