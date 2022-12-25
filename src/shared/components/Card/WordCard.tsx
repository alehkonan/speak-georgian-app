import classNames from 'classnames';
import { useRef, useState } from 'react';
import { SoundIcon } from 'src/shared/icons';

type Props = {
  nameKa: string;
  nameEn: string;
  transcription: string | null;
  pictureUrl: string | null;
  soundUrl: string | null;
};

export const WordCard = ({
  nameEn,
  nameKa,
  transcription,
  pictureUrl,
  soundUrl,
}: Props) => {
  const [isTranslationShown, setTranslationShown] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const onCopyWord = async () => {
    await navigator.clipboard.writeText(nameKa);
    alert('Text copied');
  };

  const onPlaySound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
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
      <div className="flex-1 p-3 grid">
        <div>
          <span
            tabIndex={0}
            className="text-raisin-black text-xl font-bold cursor-pointer"
            onClick={onCopyWord}
          >
            {nameKa}
          </span>
        </div>
        <div>
          <div
            tabIndex={0}
            className="inline-flex items-center gap-2 cursor-pointer"
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
          </div>
        </div>
        <div className="h-7">
          {isTranslationShown ? (
            <span className="text-raisin-black opacity-50">{nameEn}</span>
          ) : (
            <span
              tabIndex={0}
              className="text-sm font-semibold opacity-30 cursor-pointer"
              onClick={() => setTranslationShown(true)}
            >
              Tap to see translation
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
