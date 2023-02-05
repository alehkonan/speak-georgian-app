import classNames from 'classnames';
import { useRef, useState } from 'react';
import { Button, GameCard } from 'src/shared/components';
import { GameResult, GameWord } from './types';

type Props = {
  gameWords: GameWord[];
  onLastWordCheck: (result: GameResult) => void;
  onFinishGame: () => void;
};

export const Game = ({ gameWords, onLastWordCheck, onFinishGame }: Props) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const onStopGameClick = () => {
    onFinishGame();
    containerRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
  };

  const onShowNextCard = () => {
    if (!containerRef.current) return;
    const { scrollLeft, offsetWidth } = containerRef.current;
    containerRef.current.scrollTo({
      left: scrollLeft + offsetWidth,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="grid place-items-center">
        <div
          className="w-full overflow-auto snap-x snap-mandatory scrollbar-hide"
          ref={containerRef}
          onScroll={(e) => {
            const { offsetWidth, scrollLeft } = e.currentTarget;
            setCurrentPosition(Math.round(scrollLeft / offsetWidth));
          }}
        >
          <div
            className={classNames([
              'w-[1000%]',
              'grid grid-cols-10 justify-items-center gap-2 px-1 items-center',
            ])}
          >
            {gameWords.map((word) => (
              <GameCard
                key={word.id}
                word={word}
                answers={word.answers}
                onShowNextCard={onShowNextCard}
                onLastWordCheck={onLastWordCheck}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-2 p-2">
        {gameWords.map((word, index) => {
          return (
            <div
              key={word.id}
              className={classNames([
                'border rounded-full w-3 h-3 bg-white opacity-40',
                {
                  'opacity-100': index === currentPosition,
                },
              ])}
            />
          );
        })}
      </div>
      <Button primary onClick={onStopGameClick}>
        Stop the game
      </Button>
    </>
  );
};
