import type en from './translations/en.json';
import 'i18next';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      translation: typeof en;
    };
  }
}
