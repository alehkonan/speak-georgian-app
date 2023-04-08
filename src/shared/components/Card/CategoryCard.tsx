import { Link, To } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';

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
  const progressPercent =
    Math.round(((learnedWordsCount ?? 0) / (wordsCount ?? 0)) * 100) || 0;

  return (
    <Link className="bg-white p-2 grid gap-2 rounded-lg shadow" to={navigateTo}>
      <div className="flex justify-between items-center">
        <span className="text-raisin-black text-center font-bold">{title}</span>
        {!!learnedWordsCount && (
          <CircularProgressbar
            value={progressPercent}
            text={`${progressPercent} %`}
            strokeWidth={14}
            className=""
            styles={{
              root: {
                width: '18px',
              },
              path: {
                stroke: '#ffb629',
              },
              trail: {
                stroke: '#fff7e8',
              },
              text: {
                fill: '#1f2024',
              },
            }}
          />
        )}
      </div>
      <img
        className="w-3/4 aspect-square mx-auto"
        src={pictureUrl || undefined}
        alt={title}
      />
    </Link>
  );
};
