import { Select, SelectItem, type Selection } from '@nextui-org/react';
import isNumber from 'lodash/isNumber';
import { useTranslation } from 'react-i18next';
import { fallbackLng, langMap } from 'src/i18n';
import { FlagAvatar } from './FlagAvatar';

export const LanguageSwitcher = () => {
	const { i18n, t } = useTranslation();

	const currLang = langMap.get(i18n.language)?.code || fallbackLng;

	const onSelectionChange = (keys: Selection) => {
		if (keys === 'all') return undefined;
		const selectedKey = [...keys].at(0);
		if (!selectedKey || isNumber(selectedKey)) return undefined;
		i18n.changeLanguage(selectedKey);
	};

	return (
		<Select
			aria-label={t('settings.selectLanguage')}
			className="min-w-[70px]"
			items={[...langMap.values()]}
			renderValue={([item]) => <FlagAvatar language={item?.data} />}
			selectedKeys={[currLang]}
			size="sm"
			variant="flat"
			onSelectionChange={onSelectionChange}
		>
			{(language) => (
				<SelectItem key={language.code} textValue={language.label}>
					<FlagAvatar language={language} />
				</SelectItem>
			)}
		</Select>
	);
};
