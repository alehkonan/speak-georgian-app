import { Button } from '@nextui-org/react';
import { Link } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { Screen } from 'src/components/Screen';

export const NotFoundScreen = () => {
	const { t } = useTranslation();

	return (
		<Screen>
			<h2 className="text-center text-3xl font-bold">{t('pageNotFound')}</h2>
			<span className="text-center text-3xl">😕</span>
			<Button
				as={Link}
				className="text-lg"
				color="warning"
				to="/"
				variant="flat"
			>
				{t('navigation.goToHome')} 🏠
			</Button>
		</Screen>
	);
};
