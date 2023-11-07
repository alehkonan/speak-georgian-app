import { Link } from 'react-router-dom';
import { Button } from 'src/components/Button';
import { Form } from 'src/components/Form';
import { FormInput } from 'src/components/FormInput';
import { Screen } from 'src/components/Screen';
import { routes } from 'src/routes';
import zod from 'zod';

const schema = zod.object({
  firstName: zod.string(),
  lastName: zod.string(),
  email: zod.string().email(),
  password: zod
    .string()
    .min(8, 'Should contain at least 8 characters')
    .regex(/\d/, 'Should contain a digit')
    .regex(/\W/, 'Should contain a symbol')
    .regex(/[A-Z]/, 'Should contain uppercase letter')
    .regex(/[a-z]/, 'Should contain lowercase letter'),
});

type FormType = zod.infer<typeof schema>;

export const SignupScreen = () => {
  return (
    <Screen title="Create your account" prevRoute={routes.welcome}>
      <Form<FormType>
        className="grid gap-2"
        schema={schema}
        onSubmit={console.log}
      >
        <FormInput<FormType> name="firstName" type="text" label="First name" />
        <FormInput<FormType> name="lastName" type="text" label="Last name" />
        <FormInput<FormType> name="email" type="email" label="Email" />
        <FormInput<FormType> name="password" type="password" label="Password" />
        <p className="text-center">
          Already have an account?{' '}
          <Link className="text-steel-blue" to={routes.login}>
            Log in
          </Link>
        </p>

        <Button primary>Create an account</Button>
      </Form>
    </Screen>
  );
};
