import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Modal,
  ModalContent,
  useDisclosure,
} from '@nextui-org/react';
import {
  BookOpen,
  BookOpenCheck,
  Ear,
  GanttChartSquare,
  Languages,
  Star,
} from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useUser } from 'src/auth/useUser';
import { useToggleFavoriteWord } from 'src/cache/favorite/useToggleFavoriteWord';
import { WordChip } from './WordChip';

type Props = {
  wordId: number;
  word: string;
  translation: string;
  transcription?: string;
  pictureUrl?: string;
  isFavorite?: boolean | null;
  isLearned?: boolean | null;
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
  const [hasTranscription, setHasTranscription] = useState(false);
  const { isOpen, onOpenChange, onOpen } = useDisclosure();

  return (
    <>
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
          <Button isIconOnly onClick={onOpen}>
            <GanttChartSquare />
          </Button>
          <Button
            color={hasTranscription ? 'primary' : 'default'}
            isIconOnly
            onClick={() => setHasTranscription(!hasTranscription)}
          >
            <Ear />
          </Button>
          <Button
            title={
              isTranslated
                ? t('word.hideTranslation')
                : t('word.showTranslation')
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
              onClick={() => toggleFavorite({ userId: user.id, wordId })}
            >
              <Star className={isFavorite ? 'text-white' : 'text-black'} />
            </Button>
          )}
        </CardFooter>
      </Card>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="p-4">
          <p>მომღერალზე</p>
          <p>Prefix: მო</p>
          <p>Root: მღერ</p>
          <p>Suffix: ალ</p>
          <p>Postposition: ზე</p>
        </ModalContent>
      </Modal>
    </>
  );
};
