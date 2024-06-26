import { Avatar } from '@nextui-org/react';
import type { Language } from 'src/i18n';

type Props = {
	language?: Language | null;
};

const langCountryMap = new Map<Language['code'], string>([
	['en', 'gb'],
	['ru', 'ru'],
]);

const getSrc = (code: Language['code']) =>
	`https://flagcdn.com/${langCountryMap.get(code)}.svg`;

export const FlagAvatar = ({ language }: Props) => {
	if (!language?.code) return null;

	return (
		<Avatar
			aria-label={language?.label}
			className="size-4"
			src={getSrc(language.code)}
		/>
	);
};
