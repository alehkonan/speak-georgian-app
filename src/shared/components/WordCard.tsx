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
import { useTranslation } from 'react-i18next';
import { twJoin } from 'tailwind-merge';
import { useUser } from 'src/auth/useUser';
import { useToggleFavoriteWord } from 'src/cache/favorite/useToggleFavoriteWord';

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
  const { t } = useTranslation();
  const user = useUser();
  const { mutate: toggleFavorite, isPending } = useToggleFavoriteWord();

  const [isTranslated, setTranslated] = useState(false);

  return (
    <Card>
      <CardBody className="justify-end p-0">
        {isLearned && (
          <Tooltip content={t('word.isLearned')}>
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
        {user && (
          <Button
            title={
              isFavorite
                ? t('word.removeFromFavorites')
                : t('word.addToFavorites')
            }
            color={isFavorite ? 'danger' : 'default'}
            isLoading={isPending}
            isIconOnly
            onClick={() => toggleFavorite({ userId: user.id, wordId })}
          >
            <Star className={isFavorite ? 'text-white' : 'text-black'} />
          </Button>
        )}
        <Button
          title={
            isTranslated ? t('word.hideTranslation') : t('word.showTranslation')
          }
          color={isTranslated ? 'primary' : 'default'}
          isIconOnly
          onClick={() => setTranslated(!isTranslated)}
        >
          <Languages />
        </Button>
      </CardFooter>
    </Card>
  );
};
