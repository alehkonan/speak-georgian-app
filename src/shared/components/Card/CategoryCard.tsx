import { Link, To } from 'react-router-dom';
import { Progress } from '../Progress';

type Props = {
  title: string;
  pictureUrl: string | null;
  navigateTo: To;
  wordsCount?: number;
  learnedWordsCount?: number;
};

export const CategoryCard = ({
  title,
  pictureUrl,
  wordsCount,
  learnedWordsCount,
  navigateTo,
}: Props) => {
  const hasProgress =
    learnedWordsCount !== undefined && wordsCount !== undefined;

  return (
    <Link className="bg-white p-2 grid gap-2 rounded-lg shadow" to={navigateTo}>
      <span className="text-raisin-black text-center font-bold">{title}</span>
      <img
        className="w-3/4 aspect-square mx-auto"
        src={pictureUrl || undefined}
        alt={title}
      />
      {hasProgress && <Progress value={learnedWordsCount} max={wordsCount} />}
    </Link>
  );
};
