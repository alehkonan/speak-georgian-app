import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { paths } from 'src/app/paths';
import { Screen } from 'src/shared/components/Screen';

export const NotFoundScreen = () => {
  return (
    <Screen>
      <h2 className="text-xl font-bold">Page not found</h2>
      <span>😕</span>
      <Button as={Link} to={paths.root}>
        Go to the home screen 🏠
      </Button>
    </Screen>
  );
};
