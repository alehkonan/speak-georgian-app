// TODO fix ts issue
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { supabaseClient } from './client';

export type Tense = 'past' | 'present' | 'future';
type PersonalPronoun = 'firstPerson' | 'secondPerson' | 'thirdPerson';
type Lang = 'en' | 'ka';

export type Verb = {
  id: number;
} & Record<Tense, Record<PersonalPronoun, Record<Lang, string> | null>>;

const mapPersonalPronoun = (
  dbPronoun:
    | { name_en: unknown; name_ka: unknown }
    | { name_en: unknown; name_ka: unknown }[]
    | null,
): Record<Lang, string> | null => {
  if (!dbPronoun) return null;

  if (Array.isArray(dbPronoun)) return null;

  if (
    typeof dbPronoun.name_en !== 'string' ||
    typeof dbPronoun.name_ka !== 'string'
  )
    return null;

  return {
    en: dbPronoun.name_en,
    ka: dbPronoun.name_ka,
  };
};

export const getVerbs = async (): Promise<Verb[]> => {
  const { data, error } = await supabaseClient.from('verbs').select(`
      id,
      firstPersonInPast:first_person_in_past_word_id(name_ka, name_en),
      secondPersonInPast:second_person_in_past_word_id(name_ka, name_en),
      thirdPersonInPast:third_person_in_past_word_id(name_ka, name_en),
      firstPersonInPresent:first_person_in_present_word_id(name_ka, name_en),
      secondPersonInPresent:second_person_in_present_word_id(name_ka, name_en),
      thirdPersonInPresent:third_person_in_present_word_id(name_ka, name_en),
      firstPersonInFuture:first_person_in_future_word_id(name_ka, name_en),
      secondPersonInFuture:second_person_in_future_word_id(name_ka, name_en),
      thirdPersonInFuture:third_person_in_future_word_id(name_ka, name_en)
    `);

  if (error) throw error;

  return data.map((verb) => ({
    id: verb.id,
    past: {
      firstPerson: mapPersonalPronoun(verb.firstPersonInPast),
      secondPerson: mapPersonalPronoun(verb.secondPersonInPast),
      thirdPerson: mapPersonalPronoun(verb.thirdPersonInPast),
    },
    present: {
      firstPerson: mapPersonalPronoun(verb.firstPersonInPresent),
      secondPerson: mapPersonalPronoun(verb.secondPersonInPresent),
      thirdPerson: mapPersonalPronoun(verb.thirdPersonInPresent),
    },
    future: {
      firstPerson: mapPersonalPronoun(verb.firstPersonInFuture),
      secondPerson: mapPersonalPronoun(verb.secondPersonInFuture),
      thirdPerson: mapPersonalPronoun(verb.thirdPersonInFuture),
    },
  }));
};
