import { Button } from '@nextui-org/react';
import { useState } from 'react';
import { GameCard } from 'src/shared/components/GameCard';
import { Screen } from 'src/shared/components/Screen';

export const GameScreen = () => {
  const [isStarted, setStarted] = useState(false);

  return (
    <Screen>
      {isStarted ? (
        <div className="grid gap-8 self-center">
          <GameCard />
          <Button color="primary" onClick={() => setStarted(false)}>
            Stop the game
          </Button>
        </div>
      ) : (
        <Button
          className="self-center"
          color="primary"
          onClick={() => setStarted(true)}
        >
          Start the game
        </Button>
      )}
    </Screen>
  );
};
