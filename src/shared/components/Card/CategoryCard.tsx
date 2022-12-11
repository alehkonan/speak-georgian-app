import classNames from 'classnames';
import { Progress } from '../Progress';

type Props = {
  title: string;
  wordsCount: number;
  learnedWordsCount: number;
  pictureUrl: string | null;
  onSelectCard: () => void;
};

export const CategoryCard = ({
  title,
  pictureUrl,
  wordsCount,
  learnedWordsCount,
  onSelectCard,
}: Props) => {
  return (
    <div className="grid gap-1">
      <div
        className={classNames([
          'cursor-pointer',
          'bg-white',
          'grid gap-2 p-3 rounded-xl shadow-lg',
        ])}
        tabIndex={0}
        onClick={onSelectCard}
      >
        <img
          className="w-3/4 aspect-square mx-auto"
          src={pictureUrl || undefined}
          alt={title}
        />
        <Progress value={learnedWordsCount} max={wordsCount} />
      </div>
      <span className="text-dark text-sm font-bold">{title}</span>
    </div>
  );
};
