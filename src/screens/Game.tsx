import { Button } from '@nextui-org/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GameCard } from 'src/shared/components/GameCard';
import { Screen } from 'src/shared/components/Screen';

export const GameScreen = () => {
  const { t } = useTranslation();
  const [isStarted, setStarted] = useState(false);

  return (
    <Screen>
      {isStarted ? (
        <div className="grid h-full grid-rows-[1fr_auto] items-center self-center">
          <GameCard />
          <Button color="primary" onClick={() => setStarted(false)}>
            {t('game.stop')}
          </Button>
        </div>
      ) : (
        <Button
          className="self-end"
          color="primary"
          onClick={() => setStarted(true)}
        >
          {t('game.start')}
        </Button>
      )}
    </Screen>
  );
};
