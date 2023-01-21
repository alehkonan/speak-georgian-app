import { useUser } from 'src/api/user';

export const Greeting = () => {
  const { user } = useUser();

  const userName = user?.user_metadata?.name;

  return (
    <h3 className="text-raisin-black text-2xl font-bold">Hello, {userName}!</h3>
  );
};
