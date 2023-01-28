import classNames from 'classnames';
import { useCallback, useState } from 'react';
import { Word } from 'src/services/supabase';
import { recalculateFontSize } from 'src/shared/utils';
import { CardActions } from './CardActions';

export const WordCard = (word: Word) => {
  const [isTranslationShown, setTranslationShown] = useState(false);

  const onCopyWord = async () => {
    await navigator.clipboard.writeText(word.ka);
    alert('Text copied');
  };

  const nameKaContainerRef = useCallback(
    (node: HTMLDivElement | null) =>
      node && recalculateFontSize(node, word.ka, 0.55),
    [word.ka]
  );

  const transcriptionContainerRef = useCallback(
    (node: HTMLDivElement | null) =>
      node &&
      word.transcription &&
      recalculateFontSize(node, word.transcription, 0.45),
    [word.transcription]
  );

  return (
    <div className={classNames(['bg-white shadow rounded-2xl', 'flex'])}>
      {word.pictureUrl && (
        <div className="flex-shrink-0 basis-1/3">
          <img
            className="w-full h-full aspect-square object-cover object-top rounded-l-2xl"
            src={word.pictureUrl}
            alt={word.en}
          />
        </div>
      )}
      <div className="flex-1 p-2 grid w-10">
        <div className="text-xl" ref={nameKaContainerRef}>
          <button className="text-raisin-black font-bold" onClick={onCopyWord}>
            {word.ka}
          </button>
        </div>
        <div ref={transcriptionContainerRef}>
          <span className="text-raisin-black opacity-50">
            ({word.transcription || 'no transcription'})
          </span>
        </div>
        <div>
          {isTranslationShown ? (
            <span className="text-raisin-black opacity-70">{word.en}</span>
          ) : (
            <button
              className="text-raisin-black text-sm font-semibold opacity-30"
              onClick={() => setTranslationShown(true)}
            >
              Tap to see translation
            </button>
          )}
        </div>
        <CardActions
          wordId={word.id}
          isLearned={word.isLearned}
          isFavorite={word.isFavorite}
        />
      </div>
    </div>
  );
};
