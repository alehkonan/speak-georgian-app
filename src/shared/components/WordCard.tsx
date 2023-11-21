import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
  Image,
} from '@nextui-org/react';
import { useState } from 'react';
import { HeartIcon, TranslateIcon } from 'src/assets/icons';
import { useToggleFavoriteWord } from 'src/cache/favorites/useToggleFavoriteWord';
import { useGetUser } from 'src/cache/user/useGetUser';
import { twJoin } from 'tailwind-merge';

type Props = {
  wordId: number;
  word: string;
  translation: string;
  transcription?: string;
  pictureUrl?: string;
};

export const WordCard = ({
  wordId,
  word,
  translation,
  transcription,
  pictureUrl,
}: Props) => {
  const [isTranslated, setTranslated] = useState(false);
  const { data: user } = useGetUser(false);
  const { mutate: toggleFav, isPending } = useToggleFavoriteWord();

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
          <Chip variant="faded">{isTranslated ? translation : word}</Chip>
          {transcription && !isTranslated && (
            <Chip variant="faded">{transcription}</Chip>
          )}
        </div>
      </CardBody>
      <CardFooter className="justify-end gap-2">
        {user && (
          <Button
            color="default"
            isLoading={isPending}
            title="Add to favorite"
            isIconOnly
            onClick={() => toggleFav({ userId: user.id, wordId })}
          >
            <HeartIcon className="opacity-50" />
          </Button>
        )}
        <Button
          color={isTranslated ? 'primary' : 'default'}
          title={isTranslated ? 'Hide translation' : 'Show translation'}
          isIconOnly
          onClick={() => setTranslated(!isTranslated)}
        >
          <TranslateIcon />
        </Button>
      </CardFooter>
    </Card>
  );
};
