import { Verb } from './types';

export const mockVerbs: Verb[] = [
  {
    id: 1,
    en: 'to go',
    past: {
      i: 'წავედი',
      we: 'წავედით',
      you: 'წახვედი',
      it: 'წავიდა',
      they: 'წავიდნენ',
    },
    present: {
      i: 'მივდივარ',
      we: 'მივდივართ',
      you: 'წადი',
      it: 'მიდის',
      they: 'მიდიან',
    },
    future: {
      i: 'წავალ',
      we: 'წავალთ',
      you: 'წახვალთ',
      it: 'წავა',
      they: 'წავლენ',
    },
  },
  {
    id: 2,
    en: 'to find',
    past: {
      i: 'ვიპოვე',
      we: 'ვიპოვეთ',
      you: 'იპოვე',
      it: 'იპოვა',
      they: 'იპოვეს',
    },
    present: {
      i: 'ვიპოვე',
      we: 'ვიპოვეთ',
      you: 'იპოვე',
      it: 'პოულობს',
      they: 'პოულობენ',
    },
    future: {
      i: 'ვიპოვი',
      we: 'ვიპოვით',
      you: 'ნახავთ',
      it: 'იპოვის',
      they: 'იპოვიან',
    },
  },
  {
    id: 3,
    en: 'can',
    past: {
      i: 'შემეძლო',
      we: 'შეგვეძლო',
      you: 'შეგეძლო',
      it: 'შეეძლო',
      they: 'შეეძლოთ',
    },
    present: {
      i: 'შემიძლია',
      we: 'შეგვიძლია',
      you: 'შეგიძლია',
      it: 'შეუძლია',
      they: 'შეუძლიათ',
    },
    future: {
      i: 'შევძლებ',
      we: 'შევძლებთ',
      you: 'შეგეძლება',
      it: 'შეძლებს',
      they: 'შეძლებენ',
    },
  },
];
