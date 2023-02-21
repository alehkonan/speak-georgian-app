import type { PersonalPronounce, Verb, VerbTense } from './types';
import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import { toGeorgianPronounce } from './utils';

type Props = {
  verb: Verb;
};

const tenses: VerbTense[] = ['past', 'present', 'future'];

export const VerbCard = ({ verb }: Props) => {
  return (
    <div className="p-4 rounded-lg shadow-lg bg-white">
      <Tab.Group>
        <p className="text-center font-medium uppercase pb-1">{verb.en}</p>
        <Tab.List className="grid grid-cols-3 gap-2">
          {tenses.map((tense) => (
            <Tab
              key={tense}
              className={({ selected }) =>
                classNames([
                  'border p-1',
                  { 'font-bold bg-anti-flash-white': selected },
                ])
              }
            >
              {tense}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {tenses.map((tense) => (
            <Tab.Panel key={tense}>
              <dl>
                {Object.entries(verb[tense]).map(([pronounce, word]) => (
                  <div key={pronounce} className="grid grid-cols-2">
                    <dt>
                      {toGeorgianPronounce(pronounce as PersonalPronounce)}
                    </dt>
                    <dd>{word}</dd>
                  </div>
                ))}
              </dl>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
