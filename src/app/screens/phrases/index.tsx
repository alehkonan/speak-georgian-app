import { useNavigate } from 'react-router-dom';
import { routes } from 'src/app/routes';
import { IconButton } from 'src/shared/components';
import { ChevronLeftIcon } from 'src/shared/icons';

export const PhrasesScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full px-2 -mx-2 grid grid-rows-[auto_1fr] gap-3">
      <div className="flex items-center gap-3">
        <IconButton
          title="Back to Home screen"
          onClick={() => navigate(routes.home)}
        >
          <ChevronLeftIcon />
        </IconButton>
        <h2 className="text-xl font-bold">Phrases</h2>
      </div>
      <div className="flex flex-col gap-2 overflow-auto">
        <p>Here will be phrases cards</p>
      </div>
    </div>
  );
};
