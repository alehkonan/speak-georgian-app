import type us from './translations/us.json';
import 'i18next';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      translation: typeof us;
    };
  }
}
