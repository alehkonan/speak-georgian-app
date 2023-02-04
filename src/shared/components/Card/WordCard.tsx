import classNames from 'classnames';
import { useGetUserSettings } from 'src/api/userSettings';
import { Word } from 'src/services/supabase';
import { IconButton } from '../Button/IconButton';
import { useCardActions } from './useCardActions';

const getClassName = (isActive?: boolean) =>
  classNames([
    'text-raisin-black',
    {
      'opacity-10': !isActive,
      'opacity-90': isActive,
    },
  ]);

export const WordCard = (word: Word) => {
  const { settings } = useGetUserSettings();
  const { cardActions, isTranslationShown } = useCardActions({
    wordId: word.id,
    isFavorite: word.isFavorite,
    isLearned: word.isLearned,
  });

  return (
    <div
      className={classNames([
        'bg-white border rounded-lg',
        'grid grid-cols-3 grid-rows-[auto_1fr_auto]',
        'min-h-[8rem]',
      ])}
    >
      <div className="row-span-3">
        {word.pictureUrl ? (
          <img
            className="w-full h-full aspect-square object-cover object-top rounded-l-lg"
            src={word.pictureUrl}
            alt={word.en}
          />
        ) : (
          <div className="h-full grid place-items-center">
            <span>No picture</span>
          </div>
        )}
      </div>
      <div className="col-span-2 p-1 border-b">
        <span className="font-bold text-xl text-left leading-4">
          {isTranslationShown ? word.en : word.ka}
        </span>
      </div>
      <div className="col-span-2 p-1">
        {settings?.shouldShowTranscription && (
          <span className="text-raisin-black leading-3">
            ({word.transcription || 'no transcription'})
          </span>
        )}
      </div>
      <div className="col-span-2 flex gap-2 justify-self-end self-end p-1">
        {cardActions.map(({ id, Icon, onClick, isActive, isLoading }) => (
          <IconButton
            key={id}
            className={getClassName(isActive)}
            onClick={onClick}
            isLoading={isLoading}
            disabled={isLoading}
          >
            <Icon />
          </IconButton>
        ))}
      </div>
    </div>
  );
};
