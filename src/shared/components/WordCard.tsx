import { useState } from 'react';
import { Word } from 'src/api/schemas/word';
import { TranslateIcon } from 'src/assets/icons';
import { twJoin } from 'tailwind-merge';

import { IconButton } from './IconButton';

type Props = {
  word: Word;
};

export const WordCard = ({ word }: Props) => {
  const [isTranslationShown, setTranslationShown] = useState(false);

  return (
    <div
      className={twJoin([
        'bg-white border rounded-lg',
        'grid grid-cols-3 grid-rows-[auto_1fr_auto]',
        'min-h-[8rem]',
      ])}
    >
      <div className="row-span-3">
        {word.picture_url ? (
          <img
            alt={word.name_en}
            className="aspect-square h-full w-full rounded-l-lg object-cover object-top"
            src={word.picture_url}
          />
        ) : (
          <div className="grid h-full place-items-center">
            <span>No picture</span>
          </div>
        )}
      </div>
      <div className="col-span-2 border-b p-1">
        <span className="text-left text-xl font-bold leading-4">
          {isTranslationShown ? word.name_en : word.name_ka}
        </span>
      </div>
      <div className="col-span-2 p-1">
        <span className="leading-3 text-raisin-black">
          ({word.transcription || 'No transcription'})
        </span>
      </div>
      <div className="col-span-2 flex gap-2 self-end justify-self-end p-1">
        <IconButton
          className="text-raisin-black"
          onClick={() => setTranslationShown(!isTranslationShown)}
        >
          <TranslateIcon />
        </IconButton>
      </div>
    </div>
  );
};
