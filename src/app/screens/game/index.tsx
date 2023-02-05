import { useNotLearnedWords } from 'src/api/words';
import { Button } from 'src/shared/components';
import { Game } from './Game';
import { useGame } from './useGame';

export const GameScreen = () => {
  const { words, isLoading, error } = useNotLearnedWords();

  const {
    gameWords,
    results,
    closeResults,
    startGame,
    finishGame,
    checkIfGameIsFinished,
  } = useGame(words);

  if (error) return <p className="text-red-500">{error.message}</p>;

  return (
    <div className="h-full grid grid-rows-[1fr_auto] gap-1">
      {gameWords ? (
        <Game
          gameWords={gameWords}
          onLastWordCheck={checkIfGameIsFinished}
          onFinishGame={finishGame}
        />
      ) : (
        <>
          <div className="grid place-items-center">
            <div className="bg-white p-4 rounded-lg w-4/5">
              {results ? (
                <div className="grid gap-3">
                  <p className="font-semibold">Congratulation! Great result!</p>
                  <div>
                    <p>
                      Correct answers:{' '}
                      {results.filter((result) => result.isCorrect).length}
                    </p>
                    <p>
                      Wrong answers:{' '}
                      {results.filter((result) => !result.isCorrect).length}
                    </p>
                  </div>
                  <Button onClick={closeResults}>close results</Button>
                </div>
              ) : (
                <>
                  <p>This is the game mode.</p>
                  <p>
                    After the game is started you can see all available words
                    one by one and try to guess their meaning.
                  </p>
                  <p>To start the game tap the button bellow</p>
                  <p>Good luck!</p>
                </>
              )}
            </div>
          </div>
          <Button primary onClick={startGame} disabled={isLoading}>
            Start the game
          </Button>
        </>
      )}
    </div>
  );
};
