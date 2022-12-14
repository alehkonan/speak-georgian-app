import classNames from 'classnames';
import { useRef, useState } from 'react';
import { useFavoriteWordsByCategory } from 'src/api/favorites';
import { SoundIcon } from 'src/shared/icons';

type Props = {
  id: number;
  nameKa: string;
  nameEn: string;
  transcription: string | null;
  pictureUrl: string | null;
  soundUrl: string | null;
  categoryId: number | null;
  isFavorite: boolean;
};

export const WordCard = ({
  id,
  nameEn,
  nameKa,
  transcription,
  pictureUrl,
  soundUrl,
  categoryId,
  isFavorite,
}: Props) => {
  const [isTranslationShown, setTranslationShown] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { switchIsFavorite, isLoading } = useFavoriteWordsByCategory(
    id,
    categoryId
  );

  const onCopyWord = async () => {
    await navigator.clipboard.writeText(nameKa);
    alert('Text copied');
  };

  const onPlaySound = () => {
    const sound = audioRef.current;
    if (sound) {
      sound.currentTime = 0;
      sound.play();
    }
  };

  return (
    <div className={classNames(['bg-white shadow rounded-2xl', 'flex'])}>
      {pictureUrl && (
        <div className="flex-shrink-0 basis-1/3">
          <img
            className="w-full h-full aspect-square object-cover object-top rounded-l-2xl"
            src={pictureUrl}
            alt={nameEn}
          />
        </div>
      )}
      <div className="flex-1 p-2 grid">
        <div>
          <button
            className="text-raisin-black text-xl font-bold"
            onClick={onCopyWord}
          >
            {nameKa}
          </button>
        </div>
        <div>
          <button
            className="inline-flex items-center gap-2"
            onClick={onPlaySound}
          >
            <span className="text-raisin-black opacity-50">
              ({transcription || 'no transcription'})
            </span>
            {soundUrl && (
              <div>
                <SoundIcon className="w-5 h-5 text-raisin-black opacity-50" />
                <audio ref={audioRef} src={soundUrl}></audio>
              </div>
            )}
          </button>
        </div>
        <div>
          {isTranslationShown ? (
            <span className="text-raisin-black opacity-50">{nameEn}</span>
          ) : (
            <button
              className="text-raisin-black text-sm font-semibold opacity-30"
              onClick={() => setTranslationShown(true)}
            >
              Tap to see translation
            </button>
          )}
        </div>
        <div className="justify-self-end self-end">
          <button
            className="text-raisin-black text-sm font-semibold opacity-50"
            onClick={switchIsFavorite}
            disabled={isLoading}
          >
            {isLoading
              ? 'Loading...'
              : isFavorite
              ? 'Remove from favorites'
              : 'Add to favorites'}
          </button>
        </div>
      </div>
    </div>
  );
};
