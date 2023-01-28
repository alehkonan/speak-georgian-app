import classNames from 'classnames';
import { useAllWords } from 'src/api/words';
import { Button, GameCard } from 'src/shared/components';
import { useGame } from './useGame';

export const GameScreen = () => {
  const { words, isLoading, error } = useAllWords();

  const {
    gameWords,
    results,
    containerRef,
    closeResults,
    startGame,
    finishGame,
    checkIfGameIsFinished,
    showNextCard,
  } = useGame(words);

  if (error) return <p className="text-red-500">{error.message}</p>;

  return (
    <div className="h-full grid grid-rows-[1fr_auto]">
      {gameWords ? (
        <>
          <div className="grid place-items-center">
            <div
              className="w-full overflow-auto snap-x snap-mandatory scrollbar-hide"
              ref={containerRef}
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
                    onShowNextCard={showNextCard}
                    onLastWordCheck={checkIfGameIsFinished}
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
