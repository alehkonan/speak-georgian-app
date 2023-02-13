import { Link } from 'react-router-dom';
import { routes } from 'src/app/routes';

export const NotFoundScreen = () => {
  return (
    <div className="h-screen grid place-items-center">
      <div className="border rounded p-10 text-center flex flex-col gap-2">
        <h2 className="text-xl font-bold">Page not found</h2>
        <span>😕</span>
        <Link className="underline" to={routes.home}>
          Go to the home screen 🏠
        </Link>
      </div>
    </div>
  );
};
