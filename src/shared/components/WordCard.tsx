import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
  Image,
} from '@nextui-org/react';
import { useState } from 'react';
import { TranslateIcon } from 'src/assets/icons';
import { twJoin } from 'tailwind-merge';

type Props = {
  word: string;
  translation: string;
  transcription?: string;
  pictureUrl?: string;
};

export const WordCard = ({
  word,
  translation,
  transcription,
  pictureUrl,
}: Props) => {
  const [isTranslationShown, setTranslationShown] = useState(false);

  return (
    <Card>
      <CardBody className="justify-end p-0">
        {pictureUrl && (
          <Image
            alt={word}
            className="aspect-square object-cover"
            src={pictureUrl}
            removeWrapper
          />
        )}
        <div
          className={twJoin([
            'bottom-0 z-20 m-1 flex flex-wrap gap-1',
            pictureUrl && 'absolute',
          ])}
        >
          <Chip variant="faded">{isTranslationShown ? translation : word}</Chip>
          {transcription && !isTranslationShown && (
            <Chip variant="faded">{transcription}</Chip>
          )}
        </div>
      </CardBody>
      <CardFooter className="justify-end">
        <Button
          color={isTranslationShown ? 'primary' : 'default'}
          isIconOnly
          onClick={() => setTranslationShown(!isTranslationShown)}
        >
          <TranslateIcon />
        </Button>
      </CardFooter>
    </Card>
  );
};
