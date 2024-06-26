import {
	Gamepad2,
	GraduationCap,
	Home,
	LogIn,
	Plus,
	Star,
	UserRound,
} from 'lucide-react';
import { type ReactNode, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { paths } from 'src/app/paths';
import { useUser } from 'src/auth/useUser';

type NavTab = {
	path: `/${string}`;
	title: string;
	icon: ReactNode;
};

export const useNavigationTabs = () => {
	const user = useUser();
	const { t } = useTranslation();

	const publicTabs = useMemo<NavTab[]>(
		() => [
			{
				path: paths.root,
				title: t('navigation.home'),
				icon: <Home />,
			},
			{
				path: paths.rules,
				title: t('navigation.rules'),
				icon: <GraduationCap />,
			},
			{
				path: paths.login,
				title: t('navigation.login'),
				icon: <LogIn />,
			},
		],
		[t],
	);

	const privateTabs = useMemo<NavTab[]>(
		() => [
			{
				path: paths.root,
				title: t('navigation.home'),
				icon: <Home />,
			},
			{
				path: paths.rules,
				title: t('navigation.rules'),
				icon: <GraduationCap />,
			},
			{
				path: paths.game,
				title: t('navigation.game'),
				icon: <Gamepad2 />,
			},
			{
				path: paths.favorites,
				title: t('navigation.favorites'),
				icon: <Star />,
			},
			{
				path: paths.profile,
				title: t('navigation.profile'),
				icon: <UserRound />,
			},
		],
		[t],
	);

	const adminTabs = useMemo<NavTab[]>(
		() => [
			{
				path: paths.newWord,
				title: t('navigation.addWord'),
				icon: <Plus />,
			},
		],
		[t],
	);

	return user
		? user.role === 'admin'
			? [...privateTabs, ...adminTabs]
			: privateTabs
		: publicTabs;
};
