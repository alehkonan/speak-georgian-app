import { Link } from 'react-router-dom';
import { paths } from 'src/app/paths';
import { Button } from 'src/components/Button';
import { Divider } from 'src/components/Divider';
import { Form } from 'src/components/Form';
import { FormInput } from 'src/components/FormInput';
import { Screen } from 'src/components/Screen';
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
    <Screen title="Login" prevRoute={paths.welcome}>
      <Form<FormType>
        className="grid gap-2"
        schema={schema}
        onSubmit={onSubmit}
      >
        <FormInput<FormType> name="email" type="email" label="Email" />
        <FormInput<FormType> name="password" type="password" label="Password" />
        <Link
          className="justify-self-end text-ripe-mango"
          to={paths.forgotPassword}
        >
          Forgot password
        </Link>
        <Button primary>Log in</Button>
        <Button type="button" to={paths.signup}>
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
