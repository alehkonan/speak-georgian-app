import { Link } from 'react-router-dom';
import { routes } from 'src/app/routes';
import { useSignIn } from 'src/features/signIn';
import { Button, Divider, ErrorMessage, Form, InputField, Screen } from 'src/shared/components';
import * as zod from 'zod';

const schema = zod.object({
  email: zod.string().email(),
  password: zod.string(),
});

type FormType = zod.infer<typeof schema>;

const LoginScreen = () => {
  const { onSignInWithPassword, onSignInWithGoogle, isLoading, error } = useSignIn();

  const onSubmit = (data: FormType) => {
    onSignInWithPassword(data);
  };

  return (
    <Screen name="Login" showName backTo={routes.welcome}>
      <Form<FormType> className="grid gap-2" schema={schema} onSubmit={onSubmit}>
        <InputField<FormType> name="email" type="email" label="Email" />
        <InputField<FormType> name="password" type="password" label="Password" />
        <Link className="justify-self-end text-ripe-mango" to={routes.forgotPassword}>
          Forgot password
        </Link>
        <Button primary disabled={isLoading}>
          Log in
        </Button>
        <Button type="button" to={routes.signup}>
          Sign up
        </Button>
      </Form>
      <Divider text="or use your social networks" />
      <Button onClick={() => onSignInWithGoogle()}>Sign in with Google</Button>
      {error && <ErrorMessage message={error.message} />}
    </Screen>
  );
};

export default LoginScreen;
