import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
  Image,
} from '@nextui-org/react';
import { BookOpen, BookOpenCheck, Ear, Languages, Star } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { type SpeechPart } from 'src/api/schemas/word';
import { useUser } from 'src/auth/useUser';
import { useToggleFavoriteWord } from 'src/cache/favorite/useToggleFavoriteWord';
import { WordChip } from './WordChip';

type Props = {
  categoryId: number | null;
  isFavorite: boolean | null;
  isLearned: boolean | null;
  pictureUrl: string | null;
  speechPart: SpeechPart | null;
  transcription: string | null;
  translation: string;
  word: string;
  id: number;
};

export const WordCard = ({
  categoryId,
  isFavorite,
  isLearned,
  pictureUrl,
  speechPart,
  transcription,
  translation,
  word,
  id,
}: Props) => {
  const { t } = useTranslation();
  const user = useUser();
  const { mutate: toggleFavorite, isPending } =
    useToggleFavoriteWord(categoryId);

  const [isTranslated, setTranslated] = useState(false);
  const [hasTranscription, setHasTranscription] = useState(false);

  return (
    <Card>
      <CardBody className="h-36 p-0">
        {pictureUrl && (
          <Image
            alt={word}
            className="h-full object-cover"
            src={pictureUrl}
            removeWrapper
          />
        )}
        {speechPart && (
          <Chip
            className="absolute bottom-0 right-0 z-10  m-1 p-0"
            color="warning"
            size="sm"
          >
            {speechPart}
          </Chip>
        )}
        <div className="absolute top-0 z-20 m-2 grid gap-1">
          <WordChip Icon={isLearned ? BookOpenCheck : BookOpen} text={word} />
          <WordChip
            Icon={Ear}
            isVisible={hasTranscription}
            text={transcription}
          />
          <WordChip
            Icon={Languages}
            isVisible={isTranslated}
            text={translation}
          />
        </div>
      </CardBody>
      <CardFooter className="gap-2">
        <Button
          color={hasTranscription ? 'primary' : 'default'}
          title="Show transcription"
          isIconOnly
          onClick={() => setHasTranscription(!hasTranscription)}
        >
          <Ear />
        </Button>
        <Button
          title={
            isTranslated ? t('word.hideTranslation') : t('word.showTranslation')
          }
          className="mr-auto"
          color={isTranslated ? 'primary' : 'default'}
          isIconOnly
          onClick={() => setTranslated(!isTranslated)}
        >
          <Languages />
        </Button>
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
            onClick={() => toggleFavorite({ userId: user.id, wordId: id })}
          >
            <Star className={isFavorite ? 'text-white' : 'text-black'} />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
