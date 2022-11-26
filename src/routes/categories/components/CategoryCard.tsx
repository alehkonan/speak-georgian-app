import { Card } from 'src/shared/components';

type Props = {
  title: string;
  learnedWords: number;
  wordsCount: number;
  picture?: {
    url: string;
    description: string;
  };
};

export const CategoryCard = ({
  title,
  learnedWords,
  wordsCount,
  picture,
}: Props) => {
  return (
    <Card>
      <div className="grid gap-1 grid-cols-[60%_40%] grid-rows-[auto_1fr_auto]">
        <p className="text-xl font-medium">{title}</p>
        <div className="row-span-3">
          {picture && <img src={picture.url} alt={picture.description} />}
        </div>
        <p className="">{wordsCount} words total</p>
        <progress
          className="w-full self-end"
          value={learnedWords}
          max={wordsCount}
        />
      </div>
    </Card>
  );
};
