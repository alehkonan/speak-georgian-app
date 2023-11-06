import { ArrowRightIcon } from 'src/assets/icons';
import { Button } from 'src/components/Button';
import { Screen } from 'src/components/Screen';
import { routes } from 'src/routes';

export const HomeScreen = () => {
  // const { session } = useSession();

  return (
    <Screen title="Home screen">
      {/* {session && (
        <h3 className="text-raisin-black text-2xl font-bold">
          Hello, {session.user.user_metadata.name}!
        </h3>
      )} */}
      <div>
        <p>Here words are grouped by categories</p>
        <p>
          There are only simple words that you can learn, see how to pronounce
          it and add to your favorites
        </p>
      </div>
      <div className="flex justify-end">
        <Button to={routes.category}>
          <span>Go to words</span>
          <ArrowRightIcon />
        </Button>
      </div>
      <div>
        <p>One of the most difficult part in georgian language is Verbs</p>
        <p>In different tenses and with different pronouns verbs are changed</p>
        <p>On verbs page you can choose all variants and use right variant</p>
      </div>
      <div className="flex justify-end">
        <Button to={routes.verbs}>
          <span>Go to verbs</span>
          <ArrowRightIcon />
        </Button>
      </div>
      <div>
        <p>Sometimes it is possible to say a phrase in one word</p>
        <p>Some common phrases that you can use are gathered here</p>
      </div>
      <div className="flex justify-end">
        <Button to={routes.phrases}>
          <span>Go to phrases</span>
          <ArrowRightIcon />
        </Button>
      </div>
    </Screen>
  );
};
