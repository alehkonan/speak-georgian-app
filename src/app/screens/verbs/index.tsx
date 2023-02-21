import { useNavigate } from 'react-router-dom';
import { routes } from 'src/app/routes';
import { IconButton } from 'src/shared/components';
import { ChevronLeftIcon } from 'src/shared/icons';
import { mockVerbs } from './mock';
import { VerbCard } from './VerbCard';

export const VerbsScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full grid grid-rows-[auto_1fr] gap-2">
      <div className="flex items-center gap-3">
        <IconButton
          title="Back to Home screen"
          onClick={() => navigate(routes.home)}
        >
          <ChevronLeftIcon />
        </IconButton>
        <h2 className="text-xl font-bold">Verbs</h2>
      </div>
      <div className="flex flex-col gap-2 overflow-auto">
        {mockVerbs.map((verb) => (
          <VerbCard key={verb.id} verb={verb} />
        ))}
      </div>
    </div>
  );
};
