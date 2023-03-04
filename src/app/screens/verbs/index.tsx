import { routes } from 'src/app/routes';
import { Screen } from 'src/shared/components';
import { mockVerbs } from './mock';
import { VerbCard } from './VerbCard';

export const VerbsScreen = () => {
  return (
    <Screen name="Verbs" showName backTo={routes.home}>
      <div className="flex flex-col gap-2 overflow-auto">
        {mockVerbs.map((verb) => (
          <VerbCard key={verb.id} verb={verb} />
        ))}
      </div>
    </Screen>
  );
};
