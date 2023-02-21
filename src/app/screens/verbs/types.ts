export type VerbTense = 'past' | 'present' | 'future';
export type PersonalPronounce = 'i' | 'we' | 'you' | 'it' | 'they';

export type Verb = {
  id: number;
  en: string;
} & Record<VerbTense, Record<PersonalPronounce, string>>;
