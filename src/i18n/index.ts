import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from './translations/en.json';
import ru from './translations/ru.json';

export type Language = {
	readonly code: 'en' | 'ru';
	readonly label: string;
};

export const langMap = new Map<string, Language>([
	['en', { code: 'en', label: 'English' }],
	['ru', { code: 'ru', label: 'Русский' }],
]);

const defaultNS = 'translation';
export const fallbackLng = 'en';

i18next.on('languageChanged', (lang) => {
	document.documentElement.setAttribute('lang', lang);
});

i18next
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		fallbackLng,
		defaultNS,
		resources: {
			en: { [defaultNS]: en },
			ru: { [defaultNS]: ru },
		},
	});

export default i18next;
