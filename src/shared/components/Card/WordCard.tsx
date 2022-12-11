import classNames from 'classnames';
import { useState } from 'react';
import {
  CopyIcon,
  EyeIcon,
  EyeSlashIcon,
  HeartIcon,
  SoundIcon,
} from 'src/shared/icons';
import { IconButton } from '../Button/IconButton';

type Props = {
  nameKa: string;
  nameEn: string;
  transcription: string | null;
  pictureUrl: string | null;
  soundUrl?: string;
};

export const WordCard = ({
  nameEn,
  nameKa,
  transcription,
  pictureUrl,
  soundUrl,
}: Props) => {
  const [isTranslationShown, setTranslationShown] = useState(false);

  const onCopyWord = async () => {
    await navigator.clipboard.writeText(nameKa);
    alert('Text copied');
  };

  return (
    <div
      className={classNames([
        'bg-white shadow rounded-2xl p-3',
        'grid grid-cols-[30%_1fr] grid-rows-[auto_1fr_auto] gap-y-1 gap-x-4',
      ])}
    >
      <div className="row-span-3 aspect-square grid place-content-center m-1 p-2 rounded-xl shadow-md">
        <img src={pictureUrl || undefined} alt={nameEn} />
      </div>
      <p>
        <span className="text-secondary text-lg font-bold">{nameKa}</span>{' '}
        <span className="text-gray text-xs font-semibold">
          ({transcription})
        </span>
      </p>
      <div className="h-5">
        {isTranslationShown && (
          <span className="text-dark text-sm">{nameEn}</span>
        )}
      </div>
      <div className="flex justify-end items-center gap-3">
        <IconButton onClick={() => setTranslationShown(!isTranslationShown)}>
          {isTranslationShown ? <EyeSlashIcon /> : <EyeIcon />}
        </IconButton>
        <IconButton onClick={onCopyWord}>
          <CopyIcon />
        </IconButton>
        <IconButton>
          <HeartIcon />
        </IconButton>
        <IconButton>
          <SoundIcon />
        </IconButton>
      </div>
    </div>
  );
};
