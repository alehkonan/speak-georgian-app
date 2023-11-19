import { Link } from 'react-router-dom';
import { paths } from 'src/app/paths';
import { Button } from 'src/shared/components/Button';
import { Form } from 'src/shared/components/Form';
import { FormInput } from 'src/shared/components/FormInput';
import { Screen } from 'src/shared/components/Screen';
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
    <Screen prevRoute={paths.welcome} title="Create your account">
      <Form<FormType>
        className="grid gap-2"
        schema={schema}
        onSubmit={console.log}
      >
        <FormInput<FormType> label="First name" name="firstName" type="text" />
        <FormInput<FormType> label="Last name" name="lastName" type="text" />
        <FormInput<FormType> label="Email" name="email" type="email" />
        <FormInput<FormType> label="Password" name="password" type="password" />
        <p className="text-center">
          Already have an account?{' '}
          <Link className="text-steel-blue" to={paths.login}>
            Log in
          </Link>
        </p>

        <Button primary>Create an account</Button>
      </Form>
    </Screen>
  );
};
