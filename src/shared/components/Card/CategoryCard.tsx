type Props = {
  title: string;
  wordsCount: number;
  learnedWordsCount: number;
  pictureUrl: string | null;
};

export const CategoryCard = ({
  title,
  pictureUrl,
  wordsCount,
  learnedWordsCount,
}: Props) => {
  const progressPercent = Math.round((learnedWordsCount / wordsCount) * 100);

  return (
    <div className="grid gap-1">
      <div className="bg-white grid gap-2 p-3 rounded-xl">
        <img
          className="w-3/4 aspect-square mx-auto"
          src={pictureUrl || undefined}
          alt={title}
        />
        <div className="flex items-center gap-1">
          <progress
            className="w-full"
            value={learnedWordsCount}
            max={wordsCount}
          />
          <span>{progressPercent}%</span>
        </div>
      </div>
      <span className="text-dark text-sm font-bold">{title}</span>
    </div>
  );
};
