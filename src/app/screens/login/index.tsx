import { Link, useNavigate } from 'react-router-dom';
import { routes } from 'src/app/routes';
import { useSignIn } from 'src/features/signIn';
import { Button, Form, InputField } from 'src/shared/components';
import * as zod from 'zod';

const schema = zod.object({
  email: zod.string().email(),
  password: zod.string(),
});

type FormType = zod.infer<typeof schema>;

export const LoginScreen = () => {
  const navigate = useNavigate();
  const { onSignInWithPassword, onSignInWithGoogle, isLoading, error } =
    useSignIn();

  const onSubmit = (data: FormType) => {
    onSignInWithPassword(data);
  };

  return (
    <div className="p-4 grid gap-4">
      <h2 className="text-xl font-bold">Log in</h2>
      <Form<FormType>
        className="grid gap-2"
        schema={schema}
        onSubmit={onSubmit}
      >
        <InputField<FormType> name="email" type="email" label="Email" />
        <InputField<FormType>
          name="password"
          type="password"
          label="Password"
        />
        <Link
          className="justify-self-end text-ripe-mango"
          to={routes.forgotPassword}
        >
          Forgot password
        </Link>
        <Button primary disabled={isLoading}>
          Log in
        </Button>
        <Button type="button" onClick={() => navigate(routes.signup)}>
          Sign up
        </Button>
      </Form>
      <Button onClick={() => onSignInWithGoogle()}>Sign in with Google</Button>
      {error && <span className="text-red-500">{error.message}</span>}
    </div>
  );
};
