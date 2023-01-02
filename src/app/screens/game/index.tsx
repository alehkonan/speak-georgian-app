import shuffle from 'lodash/shuffle';
import { useEffect, useMemo, useState } from 'react';
import { useAllWords } from 'src/api/words';
import { Button, GameCard } from 'src/shared/components';
import { getRandomInteger } from 'src/shared/utils';

const generateAnswers = (rightAnswer: string, possibleAnswers: string[]) => {
  const answers = new Set<string>();

  answers.add(rightAnswer);

  for (let i = 0; i < 3; i++) {
    const getRandomWord = () => {
      const index = getRandomInteger(0, possibleAnswers.length);
      return possibleAnswers[index];
    };
    let word = getRandomWord();
    while (answers.has(word)) {
      word = getRandomWord();
    }
    answers.add(word);
  }

  return shuffle([...answers]);
};

export const GameScreen = () => {
  const [isGameStarted, setGameStarted] = useState(false);
  const { words, count, isLoading, error } = useAllWords();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const word = words?.at(currentWordIndex);

  const answers = useMemo(() => {
    if (!words || !word) return [];
    return generateAnswers(
      word.name_en,
      words.map((word) => word.name_en)
    );
  }, [words, word]);

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
      {isGameStarted && word ? (
        <>
          <div className="grid place-items-center">
            <GameCard
              wordId={word.id}
              nameEn={word.name_en}
              nameKa={word.name_ka}
              pictureUrl={word.picture_url}
              soundUrl={word.sound_url}
              transcription={word.transcription}
              answers={answers}
              onShowNextCard={showNextCard}
            />
          </div>
          <Button primary onClick={() => setGameStarted(false)}>
            Stop the game
          </Button>
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
