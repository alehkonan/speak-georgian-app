import { useAllWords } from 'src/api/words';
import { Button, GameCard } from 'src/shared/components';
import { useGame } from './useGame';

export const GameScreen = () => {
  const { words, isLoading, error } = useAllWords();
  const { isGameStarted, gameWords, startGame, finishGame } = useGame(words);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p className="text-red-500">{error.message}</p>;

  return (
    <div className="h-full grid grid-rows-[1fr_auto]">
      {isGameStarted ? (
        <>
          <div className="grid place-items-center">
            <div className="w-full overflow-auto snap-x snap-mandatory scrollbar-hide">
              <div className="w-[1000%] grid grid-cols-10 justify-items-center gap-2 px-1 items-center">
                {gameWords.map((word) => (
                  <GameCard
                    wordId={word.id}
                    nameEn={word.name_en}
                    nameKa={word.name_ka}
                    pictureUrl={word.picture_url}
                    soundUrl={word.sound_url}
                    transcription={word.transcription}
                    answers={word.answers}
                    onShowNextCard={() => console.log('next')}
                  />
                ))}
              </div>
            </div>
          </div>
          <Button primary onClick={finishGame}>
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
          <Button primary onClick={startGame}>
            Start the game
          </Button>
        </>
      )}
    </div>
  );
};
