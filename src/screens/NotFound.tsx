import { Button } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { paths } from 'src/app/paths';
import { Screen } from 'src/shared/components/Screen';

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
				to={paths.root}
				variant="flat"
			>
				{t('navigation.goToHome')} 🏠
			</Button>
		</Screen>
	);
};
