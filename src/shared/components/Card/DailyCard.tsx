import { SoundIcon } from 'src/shared/icons';
import { useRef } from 'react';

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
    <div className="self-center flex bg-white rounded-2xl shadow-md w-card justify-self-center">
      <div className="flex-1 grid p-2">
        <span className="text-sm text-raisin-black opacity-50">Daily word</span>
        <div className="grid grid-rows-2 p-2">
          <div>
            <button
              className="inline-flex items-center gap-2 cursor-pointer"
              onClick={onPlaySound}
            >
              <span className="text-raisin-black text-2xl font-bold">
                {wordKa}
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
            <span className="text-raisin-black opacity-50">{wordEn}</span>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            className="text-raisin-black opacity-50 font-semibold text-sm"
            onClick={onClose}
          >
            Already know
          </button>
          <button className="text-raisin-black opacity-50 font-semibold text-sm">
            Add to favorites
          </button>
        </div>
      </div>

      {pictureUrl && (
        <div className="flex-shrink-0 basis-1/3">
          <img
            className="aspect-square w-full object-cover h-full rounded-r-xl"
            src={pictureUrl}
            alt={wordKa}
          />
        </div>
      )}
    </div>
  );
};
