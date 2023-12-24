import { use } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { type Language } from 'src/types';
import ru from './translations/ru.json';
import us from './translations/us.json';

export const language: Record<Language['code'], Language> = {
  us: { code: 'us', label: 'English' },
  ru: { code: 'ru', label: 'Русский' },
};

export const initI18 = () =>
  use(initReactI18next)
    .use(LanguageDetector)
    .init({
      fallbackLng: language.us.code,
      resources: {
        [language.us.code]: {
          translation: us,
        },
        [language.ru.code]: {
          translation: ru,
        },
      },
    });
