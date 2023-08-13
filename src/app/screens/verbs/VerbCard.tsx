import type { Tense, Verb } from 'src/services/supabase';
import { useState } from 'react';
import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import { Empty, IconButton } from 'src/shared/components';
import { TranslateIcon } from 'src/shared/icons';

type Props = {
  verb: Verb;
};

const tenses: Tense[] = ['past', 'present', 'future'];

export const VerbCard = ({ verb }: Props) => {
  const [isTranslationShown, setTranslationShown] = useState(false);

  return (
    <div className="p-2 rounded shadow bg-white grid gap-2">
      <Tab.Group defaultIndex={1}>
        <Tab.Panels>
          {tenses.map((tense) => {
            const words = Object.values(verb[tense]).filter(Boolean);

            return (
              <Tab.Panel key={tense} className="min-h-[6rem]">
                {words.length ? (
                  words.map((word) => (
                    <p key={word?.en} className="text-center">
                      <span className="font-medium text-lg">{word?.ka}</span>
                      {isTranslationShown && <span className="italic"> {word?.en}</span>}
                    </p>
                  ))
                ) : (
                  <Empty />
                )}
              </Tab.Panel>
            );
          })}
        </Tab.Panels>
        <Tab.List className="flex gap-2 justify-end">
          {tenses.map((tense) => (
            <Tab
              key={tense}
              className={({ selected }) =>
                classNames(['w-20 h-9 rounded-full border', { 'bg-anti-flash-white': selected }])
              }
            >
              {tense}
            </Tab>
          ))}
          <IconButton onClick={() => setTranslationShown(!isTranslationShown)}>
            <TranslateIcon className={isTranslationShown ? 'opacity-100' : 'opacity-25'} />
          </IconButton>
        </Tab.List>
      </Tab.Group>
    </div>
  );
};
