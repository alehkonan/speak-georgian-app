import { Button, Divider } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { loginWithGoogle } from 'src/api/auth/loginWithGoogle';
import { paths } from 'src/app/paths';
import { FieldWithMountains, Hill, Logo } from 'src/assets/images';
import { LanguageSwitcher } from 'src/shared/components/LanguageSwitcher';

const APP_NAME = 'Speak Georgian';

export const WelcomeScreen = () => {
	const { t } = useTranslation();
	localStorage.setItem('visited', 'true');

	return (
		<div className="flex h-screen flex-col justify-end">
			<div className="fixed -z-10 grid h-full w-full place-items-center">
				<FieldWithMountains className="absolute h-full w-full" />
				<Logo className="z-0 w-2/5" />
			</div>
			<div className="relative flex flex-col items-center justify-end">
				<Hill className="absolute -z-10 h-[115%] w-full text-white" />
				<div className="flex w-4/5 max-w-xl flex-col gap-2 pb-10">
					<h1 className="text-center text-xl font-bold text-ripe-mango">
						{APP_NAME}
					</h1>
					<div className="fixed right-0 top-0 p-3">
						<LanguageSwitcher />
					</div>
					<Button
						as={Link}
						className="font-semibold"
						color="warning"
						to={paths.root}
						variant="flat"
					>
						{t('navigation.goToWords')}
					</Button>
					<Divider />
					<Button
						className="font-semibold"
						color="warning"
						variant="flat"
						onClick={loginWithGoogle}
					>
						{t('auth.loginWithGoogle')}
					</Button>
				</div>
			</div>
		</div>
	);
};
