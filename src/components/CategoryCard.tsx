import { type To } from 'react-router-dom';
import { Link } from 'react-router-dom';

type Props = {
  title: string;
  pictureUrl?: string | null;
  navigateTo: To;
};

export const CategoryCard = ({ title, pictureUrl, navigateTo }: Props) => {
  return (
    <Link className="grid gap-2 rounded-lg bg-white p-2 shadow" to={navigateTo}>
      <div className="flex items-center justify-between">
        <span className="text-center font-bold text-raisin-black">{title}</span>
      </div>
      <img
        className="mx-auto aspect-square w-3/4"
        src={pictureUrl || undefined}
        alt={title}
      />
    </Link>
  );
};
