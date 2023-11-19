import { Link } from 'react-router-dom';
import { paths } from 'src/app/paths';
import { Button } from 'src/shared/components/Button';
import { Divider } from 'src/shared/components/Divider';
import { Form } from 'src/shared/components/Form';
import { FormInput } from 'src/shared/components/FormInput';
import { Screen } from 'src/shared/components/Screen';
import zod from 'zod';

const schema = zod.object({
  email: zod.string().email(),
  password: zod.string(),
});

type FormType = zod.infer<typeof schema>;

export const LoginScreen = () => {
  const onSubmit = (data: FormType) => {
    console.log(data);
  };

  return (
    <Screen prevRoute={paths.welcome} title="Login">
      <Form<FormType>
        className="grid gap-2"
        schema={schema}
        onSubmit={onSubmit}
      >
        <FormInput<FormType> label="Email" name="email" type="email" />
        <FormInput<FormType> label="Password" name="password" type="password" />
        <Link
          className="justify-self-end text-ripe-mango"
          to={paths.forgotPassword}
        >
          Forgot password
        </Link>
        <Button primary>Log in</Button>
        <Button to={paths.signup} type="button">
          Sign up
        </Button>
      </Form>
      <Divider text="or use your social networks" />
      <Button onClick={() => console.log('login with Google')}>
        Sign in with Google
      </Button>
    </Screen>
  );
};
