import { array } from 'zod';
import { RuleSchema } from '../schemas/rule';

export const getRules = async () => {
  const response = await fetch('/rules.json');

  if (!response.ok) throw new Error(`Can't fetch rules`);

  const data = await response.json();

  return array(RuleSchema).parse(data);
};
