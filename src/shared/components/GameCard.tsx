import { Button, Card, CardBody, CardHeader, Image } from '@nextui-org/react';
import shuffle from 'lodash/shuffle';
import { useMemo, useState } from 'react';

type Props = {
  word: string;
  translation: string;
  translations: string[];
  pictureUrl?: string;
};

export const GameCard = ({
  word,
  translation,
  translations,
  pictureUrl,
}: Props) => {
  const [answer, setAnswer] = useState<string>();

  const variants = useMemo(
    () => shuffle([translation, ...translations]),
    [translation, translations],
  );

  return (
    <Card shadow="sm">
      <CardHeader className="justify-center pb-0">
        <p className="text-lg font-semibold">{word}</p>
      </CardHeader>
      <CardBody className="gap-4">
        {pictureUrl && (
          <Image
            className="aspect-square w-full max-w-md self-center object-cover"
            src={pictureUrl}
            removeWrapper
          />
        )}
        <div className="grid grid-cols-2 gap-2">
          {variants.map((variant) => (
            <Button
              key={word}
              color={
                answer === variant
                  ? answer === translation
                    ? 'success'
                    : 'danger'
                  : 'default'
              }
              onClick={() => setAnswer(variant)}
            >
              {variant}
            </Button>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};
