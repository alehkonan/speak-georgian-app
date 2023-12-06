import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
  Image,
  Tooltip,
} from '@nextui-org/react';
import { Check, Languages, Star } from 'lucide-react';
import { useState } from 'react';
import { useToggleFavoriteWord } from 'src/cache/favorite/useToggleFavoriteWord';
import { useUser } from 'src/cache/user/useUser';
import { twJoin } from 'tailwind-merge';

type Props = {
  wordId: number;
  word: string;
  translation: string;
  transcription?: string;
  pictureUrl?: string;
  isFavorite: boolean | null;
  isLearned: boolean | null;
};

export const WordCard = ({
  wordId,
  word,
  translation,
  transcription,
  pictureUrl,
  isFavorite,
  isLearned,
}: Props) => {
  const [isTranslated, setTranslated] = useState(false);
  const user = useUser();
  const { mutate: toggleFavorite, isPending } = useToggleFavoriteWord();

  return (
    <Card>
      <CardBody className="justify-end p-0">
        {isLearned && (
          <Tooltip content="This word is learned">
            <Check
              className={twJoin([
                'absolute right-0 top-0 z-20',
                'm-1 rounded-full p-1 shadow',
                'bg-green-400 text-white',
              ])}
              size="28"
            />
          </Tooltip>
        )}
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
        {/* <Button
          color={isLearned ? 'primary' : 'default'}
          title={isLearned ? 'Is learned' : 'Is not learned'}
          isIconOnly
        >
          <CheckCircle />
        </Button> */}
        {user && (
          <Button
            color={isFavorite ? 'danger' : 'default'}
            isLoading={isPending}
            title={isFavorite ? 'Remove from favorite' : 'Add to favorite'}
            isIconOnly
            onClick={() => toggleFavorite({ userId: user.id, wordId })}
          >
            <Star className={isFavorite ? 'text-white' : 'text-black'} />
          </Button>
        )}
        <Button
          color={isTranslated ? 'primary' : 'default'}
          title={isTranslated ? 'Hide translation' : 'Show translation'}
          isIconOnly
          onClick={() => setTranslated(!isTranslated)}
        >
          <Languages />
        </Button>
      </CardFooter>
    </Card>
  );
};
