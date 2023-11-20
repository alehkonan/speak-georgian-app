import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { paths } from 'src/app/paths';
import { Screen } from 'src/shared/components/Screen';

export const NotFoundScreen = () => {
  return (
    <Screen>
      <h2 className="text-center text-3xl font-bold">Page not found</h2>
      <span className="text-center text-3xl">😕</span>
      <Button
        as={Link}
        className="text-lg"
        color="warning"
        to={paths.root}
        variant="flat"
      >
        Go to the home screen 🏠
      </Button>
    </Screen>
  );
};
