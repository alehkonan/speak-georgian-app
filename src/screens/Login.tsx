import { Button } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';
import { loginWithGoogle } from 'src/api/auth/loginWithGoogle';
import { Screen } from 'src/shared/components/Screen';

export const LoginScreen = () => {
	const { t } = useTranslation();

	return (
		<Screen>
			<Button
				className="justify-self-center"
				color="primary"
				onClick={loginWithGoogle}
			>
				{t('auth.loginWithGoogle')}
			</Button>
		</Screen>
	);
};
