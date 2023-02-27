import { Verb } from './types';

export const mockVerbs: Verb[] = [
  {
    id: 1,
    past: {
      en: 'went',
      ka: {
        i: 'წავედი',
        we: 'წავედით',
        you: 'წახვედი',
        it: 'წავიდა',
        they: 'წავიდნენ',
      },
    },
    present: {
      en: 'go',
      ka: {
        i: 'მივდივარ',
        we: 'მივდივართ',
        you: 'წადი',
        it: 'მიდის',
        they: 'მიდიან',
      },
    },
    future: {
      en: 'will go',
      ka: {
        i: 'წავალ',
        we: 'წავალთ',
        you: 'წახვალთ',
        it: 'წავა',
        they: 'წავლენ',
      },
    },
  },
  {
    id: 2,
    past: {
      en: 'found',
      ka: {
        i: 'ვიპოვე',
        we: 'ვიპოვეთ',
        you: 'იპოვე',
        it: 'იპოვა',
        they: 'იპოვეს',
      },
    },
    present: {
      en: 'find',
      ka: {
        i: 'ვიპოვე',
        we: 'ვიპოვეთ',
        you: 'იპოვე',
        it: 'პოულობს',
        they: 'პოულობენ',
      },
    },
    future: {
      en: 'will find',
      ka: {
        i: 'ვიპოვი',
        we: 'ვიპოვით',
        you: 'ნახავთ',
        it: 'იპოვის',
        they: 'იპოვიან',
      },
    },
  },
  {
    id: 3,
    past: {
      en: 'could',
      ka: {
        i: 'შემეძლო',
        we: 'შეგვეძლო',
        you: 'შეგეძლო',
        it: 'შეეძლო',
        they: 'შეეძლოთ',
      },
    },
    present: {
      en: 'can',
      ka: {
        i: 'შემიძლია',
        we: 'შეგვიძლია',
        you: 'შეგიძლია',
        it: 'შეუძლია',
        they: 'შეუძლიათ',
      },
    },
    future: {
      en: 'will be able',
      ka: {
        i: 'შევძლებ',
        we: 'შევძლებთ',
        you: 'შეგეძლება',
        it: 'შეძლებს',
        they: 'შეძლებენ',
      },
    },
  },
];
