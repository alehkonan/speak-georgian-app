export type VerbTense = 'past' | 'present' | 'future';
export type PersonalPronounce = 'i' | 'we' | 'you' | 'it' | 'they';

export type Verb = {
  id: number;
} & Record<VerbTense, { en: string; ka: Record<PersonalPronounce, string> }>;
