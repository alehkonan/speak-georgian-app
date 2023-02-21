import { PersonalPronounce } from './types';

export const toGeorgianPronounce = (pronounce: PersonalPronounce) => {
  switch (pronounce) {
    case 'i':
      return 'მე';
    case 'we':
      return 'ჩვენ';
    case 'you':
      return 'შენ';
    case 'it':
      return 'ის';
    case 'they':
      return 'ისინი';
  }
};
