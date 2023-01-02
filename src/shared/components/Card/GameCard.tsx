import classNames from 'classnames';
import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { SoundIcon } from 'src/shared/icons';
import { GameCardPicture } from './GameCardPicture';

type Props = {
  nameKa: string;
  nameEn: string;
  transcription: string | null;
  pictureUrl: string | null;
  soundUrl: string | null;
  answers: string[];
  onShowNextCard: () => void;
};

const NavButton = ({ children }: PropsWithChildren) => {
  return <button className="flex-1 h-full border opacity-0">{children}</button>;
};

export const GameCard = ({
  nameEn,
  nameKa,
  transcription,
  pictureUrl,
  answers,
  soundUrl,
  onShowNextCard,
}: Props) => {
  const [clickedAnswer, setClickedAnswer] = useState<string>();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const onPlaySound = () => {
    const sound = audioRef.current;
    if (sound) {
      sound.currentTime = 0;
      sound.play();
    }
  };

  const onCheckAnswer = (answer: string) => {
    setClickedAnswer(answer);
    setTimeout(onShowNextCard, 1000);
  };

  useEffect(() => {
    setClickedAnswer(undefined);
  }, [nameEn]);

  return (
    <div className="bg-white rounded-lg grid p-3 gap-2 w-full md:w-4/5">
      {pictureUrl && (
        <div className="flex justify-between items-center">
          <NavButton>Previous</NavButton>
          <GameCardPicture nameEn={nameEn} pictureUrl={pictureUrl} />
          <NavButton>Next</NavButton>
        </div>
      )}
      <p className="text-center">
        <span className="text-raisin-black text-xl font-bold">{nameKa}</span>{' '}
        {transcription && (
          <span className="text-raisin-black opacity-50">
            ({transcription})
          </span>
        )}
      </p>
      <div className="grid grid-cols-2">
        {answers.map((answer) => (
          <button
            key={answer}
            className={classNames([
              'border p-2 hover:bg-slate-100 transition-all',
              {
                'bg-green-400 hover:bg-green-400':
                  answer === nameEn && clickedAnswer === answer,
              },
              {
                'bg-red-400 hover:bg-red-400':
                  answer !== nameEn && clickedAnswer === answer,
              },
            ])}
            onClick={() => onCheckAnswer(answer)}
            disabled={Boolean(clickedAnswer)}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};
