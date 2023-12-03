import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Image,
  Spinner,
} from '@nextui-org/react';
import shuffle from 'lodash/shuffle';
import { useMemo, useState } from 'react';
import { useGetGameWord } from 'src/cache/game/useGetGameWord';
import { useUpdateStatistic } from 'src/cache/statistic/useUpdateStatistic';
import { useUser } from 'src/cache/user/useUser';

import { ErrorCard } from './ErrorCard';

export const GameCard = () => {
  const user = useUser();
  const [answer, setAnswer] = useState<string>();
  const { data: gameWord, refetch, error, isFetching } = useGetGameWord();
  const { mutate: updateStatistic } = useUpdateStatistic();

  const options = useMemo(() => {
    if (!gameWord) return [];
    return shuffle([gameWord.name_en, ...gameWord.variants]);
  }, [gameWord]);

  const handleOption = (option: string) => {
    setAnswer(option);
    if (user && gameWord) {
      updateStatistic({
        userId: user.id,
        wordId: gameWord?.id,
        isRightAnswer: option === gameWord.name_en,
      });
    }

    setTimeout(() => {
      setAnswer(undefined);
      refetch();
    }, 1000);
  };

  if (isFetching) return <Spinner />;
  if (error) return <ErrorCard error={error} onRetry={refetch} />;

  return (
    <Card shadow="sm">
      <CardHeader className="justify-center pb-0">
        <p className="text-lg font-semibold">{gameWord?.name_ka}</p>
      </CardHeader>
      <CardBody className="gap-4">
        {gameWord?.picture_url && (
          <Image
            className="aspect-square w-full max-w-md self-center object-cover"
            src={gameWord.picture_url}
            removeWrapper
          />
        )}
        <div className="grid grid-cols-2 gap-2">
          {options.map((option) => (
            <Button
              key={option}
              color={
                answer === option
                  ? option === gameWord?.name_en
                    ? 'success'
                    : 'danger'
                  : 'default'
              }
              disabled={Boolean(answer)}
              onClick={() => handleOption(option)}
            >
              {option}
            </Button>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};
