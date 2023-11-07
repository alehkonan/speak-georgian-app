import classNames from 'classnames';
import { PropsWithChildren, useState } from 'react';
import { Word } from 'src/api/schemas/word';

import { GameCardPicture } from './GameCardPicture';

type Props = {
  word: Word;
  answers: string[];
  onLastWordCheck: (result: Word & { isCorrect: boolean }) => void;
  onShowNextCard: () => void;
};

const NavButton = ({ children }: PropsWithChildren) => {
  return <button className="h-full flex-1 border opacity-0">{children}</button>;
};

export const GameCard = ({
  word,
  answers,
  onLastWordCheck,
  onShowNextCard,
}: Props) => {
  const [clickedAnswer, setClickedAnswer] = useState<string>();

  const isRight = (answer: string) => answer === word.name_en;
  const isClicked = (answer: string) => answer === clickedAnswer;

  const onAnswerClick = (answer: string) => {
    setClickedAnswer(answer);
    setTimeout(() => {
      onShowNextCard();
      onLastWordCheck({
        ...word,
        isCorrect: isRight(answer),
      });
    }, 500);
  };

  return (
    <div className="grid w-full snap-center snap-always gap-2 rounded-lg bg-white p-3 md:w-4/5">
      {word.picture_url && (
        <div className="flex items-center justify-between">
          <NavButton>Previous</NavButton>
          <GameCardPicture
            nameEn={word.name_en}
            pictureUrl={word.picture_url}
          />
          <NavButton>Next</NavButton>
        </div>
      )}
      <p className="flex flex-wrap items-center justify-center gap-x-2">
        <span className="text-xl font-bold text-raisin-black">
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
