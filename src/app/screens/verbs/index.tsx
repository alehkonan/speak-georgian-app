import { useVerbs } from 'src/api/verbs';
import { routes } from 'src/app/routes';
import { Screen } from 'src/shared/components';
import { VerbCard } from './VerbCard';

const VerbsScreen = () => {
  const { verbs, isLoading } = useVerbs();

  return (
    <Screen name="Verbs" showName backTo={routes.home} isLoading={isLoading}>
      <div className="flex flex-col gap-2 overflow-auto">
        {verbs?.map((verb) => (
          <VerbCard key={verb.id} verb={verb} />
        ))}
      </div>
    </Screen>
  );
};

export default VerbsScreen;
