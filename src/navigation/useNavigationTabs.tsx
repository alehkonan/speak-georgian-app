import {
	Gamepad2,
	GraduationCap,
	LogIn,
	Plus,
	Star,
	UserRound,
	WholeWordIcon,
} from 'lucide-react';
import { type ReactNode, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useUser } from 'src/auth/useUser';
import type { LinkOptions, RegisteredRouter } from '@tanstack/react-router';

type NavTab = {
	path: LinkOptions<RegisteredRouter>['to'];
	title: string;
	icon: ReactNode;
};

export const useNavigationTabs = () => {
	const user = useUser();
	const { t } = useTranslation();

	const publicTabs = useMemo<NavTab[]>(
		() => [
			{
				path: '/category',
				title: t('navigation.words'),
				icon: <WholeWordIcon />,
			},
			{
				path: '/rules',
				title: t('navigation.rules'),
				icon: <GraduationCap />,
			},
			{
				path: '/favorites',
				title: t('navigation.favorites'),
				icon: <Star />,
			},
			{
				path: '/login',
				title: t('navigation.login'),
				icon: <LogIn />,
			},
		],
		[t],
	);

	const privateTabs = useMemo<NavTab[]>(
		() => [
			{
				path: '/category',
				title: t('navigation.words'),
				icon: <WholeWordIcon />,
			},
			{
				path: '/rules',
				title: t('navigation.rules'),
				icon: <GraduationCap />,
			},
			{
				path: '/game',
				title: t('navigation.game'),
				icon: <Gamepad2 />,
			},
			{
				path: '/favorites',
				title: t('navigation.favorites'),
				icon: <Star />,
			},
			{
				path: '/profile',
				title: t('navigation.profile'),
				icon: <UserRound />,
			},
		],
		[t],
	);

	const adminTabs = useMemo<NavTab[]>(
		() => [
			{
				path: '/new-word',
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
