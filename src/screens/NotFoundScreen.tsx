import { Link } from 'react-router-dom';
import { paths } from 'src/app/paths';

export const NotFoundScreen = () => {
  return (
    <div className="grid h-screen place-items-center">
      <div className="flex flex-col gap-2 rounded border p-10 text-center">
        <h2 className="text-xl font-bold">Page not found</h2>
        <span>😕</span>
        <Link className="underline" to={paths.root}>
          Go to the home screen 🏠
        </Link>
      </div>
    </div>
  );
};
