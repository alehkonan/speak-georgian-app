import { Button } from '@nextui-org/react';
import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { useLogin } from 'src/cache/auth/useLogin';
import { Screen } from 'src/components/Screen';

export const Route = createFileRoute('/_layout/login')({
	component: LoginScreen,
});

function LoginScreen() {
	const { t } = useTranslation();
	const { mutate: login, isPending } = useLogin();

	return (
		<Screen>
			<Button
				className="justify-self-center"
				color="primary"
				onClick={() => login()}
				isLoading={isPending}
			>
				{t('auth.loginWithGoogle')}
			</Button>
		</Screen>
	);
}
