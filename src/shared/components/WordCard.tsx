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
import { useToggleFavoriteWord } from 'src/cache/favorite/useToggleFavoriteWord';
import { useUser } from 'src/cache/user/useUser';
import { twJoin } from 'tailwind-merge';

type Props = {
  wordId: number;
  word: string;
  translation: string;
  transcription?: string;
  pictureUrl?: string;
  isFavorite?: boolean;
};

export const WordCard = ({
  wordId,
  word,
  translation,
  transcription,
  pictureUrl,
  isFavorite,
}: Props) => {
  const [isTranslated, setTranslated] = useState(false);
  const user = useUser();
  const { mutate: toggleFavorite, isPending } = useToggleFavoriteWord();

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
            color={isFavorite ? 'danger' : 'default'}
            isLoading={isPending}
            title={isFavorite ? 'Remove from favorite' : '"Add to favorite"'}
            isIconOnly
            onClick={() => toggleFavorite({ userId: user.id, wordId })}
          >
            <HeartIcon className={isFavorite ? 'text-white' : 'text-black'} />
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
