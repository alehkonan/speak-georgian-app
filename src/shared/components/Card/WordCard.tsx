import classNames from 'classnames';
import { useCallback, useRef, useState } from 'react';
import { Word } from 'src/services/supabase';
import { SoundIcon } from 'src/shared/icons';
import { recalculateFontSize } from 'src/shared/utils';
import { FavoriteButton } from './FavoriteButton';

export const WordCard = (word: Word) => {
  const [isTranslationShown, setTranslationShown] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const onCopyWord = async () => {
    await navigator.clipboard.writeText(word.ka);
    alert('Text copied');
  };

  const onPlaySound = () => {
    const sound = audioRef.current;
    if (sound) {
      sound.currentTime = 0;
      sound.play();
    }
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
        <div className="" ref={transcriptionContainerRef}>
          <button
            className="text-raisin-black opacity-50 inline-flex items-center gap-2"
            onClick={onPlaySound}
          >
            <span>({word.transcription || 'no transcription'})</span>
            {word.soundUrl && (
              <div>
                <SoundIcon className="w-5 h-5" />
                <audio ref={audioRef} src={word.soundUrl}></audio>
              </div>
            )}
          </button>
        </div>
        <div>
          {isTranslationShown ? (
            <span className="text-raisin-black opacity-50">{word.en}</span>
          ) : (
            <button
              className="text-raisin-black text-sm font-semibold opacity-30"
              onClick={() => setTranslationShown(true)}
            >
              Tap to see translation
            </button>
          )}
        </div>
        <div className="flex gap-3 justify-self-end self-end">
          <button
            className="text-raisin-black text-sm font-semibold opacity-50"
            onClick={() => console.log('mark as learned')}
          >
            Already know
          </button>
          <FavoriteButton wordId={word.id} isFavorite={word.isFavorite} />
        </div>
      </div>
    </div>
  );
};
