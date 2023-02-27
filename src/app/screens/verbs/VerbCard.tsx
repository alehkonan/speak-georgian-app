import type { PersonalPronounce, Verb, VerbTense } from './types';
import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import { toGeorgianPronounce } from './utils';
import { IconButton } from 'src/shared/components';
import { TranslateIcon } from 'src/shared/icons';
import { useState } from 'react';

type Props = {
  verb: Verb;
};

const tenses: VerbTense[] = ['past', 'present', 'future'];

export const VerbCard = ({ verb }: Props) => {
  const [isTranslationShown, setTranslationShown] = useState(false);

  return (
    <div className="p-2 rounded shadow bg-white grid gap-2">
      <Tab.Group defaultIndex={1}>
        <Tab.Panels>
          {tenses.map((tense) => (
            <Tab.Panel key={tense} className="flex items-center">
              <div className="flex-1">
                {Object.entries(verb[tense].ka).map(([pronounce, word]) => (
                  <p key={pronounce} className="text-center">
                    {toGeorgianPronounce(pronounce as PersonalPronounce)} {word}
                  </p>
                ))}
              </div>
              {isTranslationShown && (
                <p className="w-24 text-center">{verb[tense].en}</p>
              )}
            </Tab.Panel>
          ))}
        </Tab.Panels>
        <Tab.List className="flex gap-2 justify-center">
          {tenses.map((tense) => (
            <Tab
              key={tense}
              className={({ selected }) =>
                classNames([
                  'w-20 h-9 rounded-full border',
                  { 'bg-anti-flash-white': selected },
                ])
              }
            >
              {tense}
            </Tab>
          ))}
          <IconButton onClick={() => setTranslationShown(!isTranslationShown)}>
            <TranslateIcon
              className={isTranslationShown ? 'opacity-100' : 'opacity-25'}
            />
          </IconButton>
        </Tab.List>
      </Tab.Group>
    </div>
  );
};
