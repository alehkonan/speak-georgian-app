import { Select, SelectItem, type Selection } from '@nextui-org/react';
import isNumber from 'lodash/isNumber';
import { useTranslation } from 'react-i18next';
import { language } from 'src/i18n';
import { FlagAvatar } from './FlagAvatar';

const languages = Object.values(language);

export const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const selectedLanguage =
    languages.find(({ code }) => code === i18n.language) || language.us;

  const onSelectionChange = (keys: Selection) => {
    if (keys === 'all') return undefined;
    const selectedKey = [...keys].at(0);
    if (!selectedKey || isNumber(selectedKey)) return undefined;
    i18n.changeLanguage(selectedKey);
  };

  return (
    <Select
      aria-label={t('settings.selectLanguage')}
      items={languages}
      renderValue={([item]) => <FlagAvatar language={item?.data} />}
      selectedKeys={[selectedLanguage.code]}
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
