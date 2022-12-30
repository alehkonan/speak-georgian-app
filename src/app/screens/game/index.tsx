import { useEffect, useState } from 'react';
import { useAllWords } from 'src/api/words';
import { Button } from 'src/shared/components';
import { getRandomInteger } from 'src/shared/utils';

export const GameScreen = () => {
  const [isGameStarted, setGameStarted] = useState(false);
  const { words, count, isLoading, error } = useAllWords();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const showNextCard = () => {
    setCurrentWordIndex(getRandomInteger(0, count - 1));
  };

  useEffect(() => {
    if (isGameStarted) setCurrentWordIndex(getRandomInteger(0, count - 1));
  }, [isGameStarted]);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p className="text-red-500">{error.message}</p>;

  return (
    <div className="h-full grid grid-rows-[1fr_auto]">
      {isGameStarted ? (
        <>
          <div className="grid place-items-center">
            <div className="bg-white p-4 rounded-lg w-4/5">
              <p>{words?.at(currentWordIndex)?.name_ka}</p>
            </div>
          </div>
          <div className="flex gap-3 justify-center">
            <Button className="w-2/5" primary onClick={showNextCard}>
              Next word
            </Button>
            <Button
              className="w-2/5"
              primary
              onClick={() => setGameStarted(false)}
            >
              Stop the game
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="grid place-items-center">
            <div className="bg-white p-4 rounded-lg w-4/5">
              <p>This is the game mode.</p>
              <p>
                After the game is started you can see all available words one by
                one and try to guess their meaning.
              </p>
              <p>To start the game tap the button bellow</p>
              <p>Good luck!</p>
            </div>
          </div>
          <Button primary onClick={() => setGameStarted(true)}>
            Start the game
          </Button>
        </>
      )}
    </div>
  );
};
