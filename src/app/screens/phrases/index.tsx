import { routes } from 'src/app/routes';
import { Screen } from 'src/shared/components';

const PhrasesScreen = () => {
  return (
    <Screen name="Phrases" showName backTo={routes.home}>
      <div className="flex flex-col gap-2 overflow-auto">
        <p>Here will be phrases cards</p>
      </div>
    </Screen>
  );
};

export default PhrasesScreen;
