import { useRef } from 'react';
import { SoundIcon } from 'src/assets/icons';

type Props = {
  wordKa: string;
  wordEn: string;
  transcription: string | null;
  soundUrl: string | null;
  pictureUrl: string | null;
  onClose?: () => void;
};

export const DailyCard = ({
  wordKa,
  wordEn,
  soundUrl,
  pictureUrl,
  onClose,
}: Props) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const onPlaySound = () => {
    const sound = audioRef.current;
    if (sound) {
      sound.currentTime = 0;
      sound.play();
    }
  };

  return (
    <div className="flex self-center justify-self-center rounded-2xl bg-white shadow-md">
      <div className="grid flex-1 p-2">
        <span className="text-sm text-raisin-black opacity-50">Daily word</span>
        <div className="grid grid-rows-2 p-2">
          <div>
            <button
              type="button"
              className="inline-flex cursor-pointer items-center gap-2"
              onClick={onPlaySound}
            >
              <span className="text-2xl font-bold text-raisin-black">
                {wordKa}
              </span>
              {soundUrl && (
                <div>
                  <SoundIcon className="h-5 w-5 text-raisin-black opacity-50" />
                  <audio ref={audioRef}>
                    <source src={soundUrl} />
                    <track kind="captions" />
                  </audio>
                </div>
              )}
            </button>
          </div>
          <div>
            <span className="text-raisin-black opacity-50">{wordEn}</span>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            className="text-sm font-semibold text-raisin-black opacity-50"
            onClick={onClose}
          >
            Already know
          </button>
          <button className="text-sm font-semibold text-raisin-black opacity-50">
            Add to favorites
          </button>
        </div>
      </div>

      {pictureUrl && (
        <div className="shrink-0 basis-1/3">
          <img
            className="aspect-square h-full w-full rounded-r-xl object-cover"
            src={pictureUrl}
            alt={wordKa}
          />
        </div>
      )}
    </div>
  );
};
