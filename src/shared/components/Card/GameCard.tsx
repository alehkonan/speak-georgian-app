import classNames from 'classnames';
import { PropsWithChildren, useRef, useState } from 'react';
import { incrementAnswers } from 'src/services/supabase';
import { SoundIcon } from 'src/shared/icons';
import { Word } from 'src/shared/types';
import { GameCardPicture } from './GameCardPicture';

type Props = {
  word: Word;
  answers: string[];
  onLastWordCheck: (result: Word & { isCorrect: boolean }) => void;
  onShowNextCard: () => void;
};

const NavButton = ({ children }: PropsWithChildren) => {
  return <button className="flex-1 h-full border opacity-0">{children}</button>;
};

export const GameCard = ({
  word,
  answers,
  onLastWordCheck,
  onShowNextCard,
}: Props) => {
  const [clickedAnswer, setClickedAnswer] = useState<string>();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const isRight = (answer: string) => answer === word.name_en;
  const isClicked = (answer: string) => answer === clickedAnswer;

  const onPlaySound = () => {
    const sound = audioRef.current;
    if (sound) {
      sound.currentTime = 0;
      sound.play();
    }
  };

  const onAnswerClick = (answer: string) => {
    setClickedAnswer(answer);
    incrementAnswers(word.id, isRight(answer));
    setTimeout(() => {
      onShowNextCard();
      onLastWordCheck({
        ...word,
        isCorrect: isRight(answer),
      });
    }, 500);
  };

  return (
    <div className="bg-white rounded-lg grid p-3 gap-2 w-full md:w-4/5 snap-always snap-center">
      {word.picture_url && (
        <div className="flex justify-between items-center">
          <NavButton>Previous</NavButton>
          <GameCardPicture
            nameEn={word.name_en}
            pictureUrl={word.picture_url}
          />
          <NavButton>Next</NavButton>
        </div>
      )}
      <p className="flex justify-center items-center gap-x-2 flex-wrap">
        <span className="text-raisin-black text-xl font-bold">
          {word.name_ka}
        </span>
        {word.transcription && (
          <span className="text-raisin-black opacity-50">
            ({word.transcription})
          </span>
        )}
      </p>
      <div className="grid grid-cols-2">
        {answers.map((answer) => (
          <button
            key={answer}
            className={classNames([
              'border p-2 transition-all',
              {
                'bg-green-400 hover:bg-green-400':
                  isClicked(answer) && isRight(answer),
              },
              {
                'bg-red-400 hover:bg-red-400':
                  isClicked(answer) && !isRight(answer),
              },
            ])}
            onClick={() => onAnswerClick(answer)}
            disabled={Boolean(clickedAnswer)}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};