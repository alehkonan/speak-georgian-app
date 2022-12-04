import { useUser } from 'src/api/auth';
import { useSignUp } from 'src/features/auth';
import { Button, Form, InputField, Link } from 'src/shared/components';
import * as zod from 'zod';
import { routes } from '..';

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
  const { onSignUp, error, isLoading } = useSignUp();
  const { user } = useUser();

  const onSubmit = ({ email, firstName, lastName, password }: FormType) => {
    onSignUp({
      email,
      password,
      options: {
        data: {
          firstName,
          lastName,
        },
      },
    });
  };

  return (
    <div className="p-4 grid gap-4">
      <h2 className="text-xl font-bold">Create your account</h2>
      <Form<FormType>
        className="grid gap-2"
        schema={schema}
        onSubmit={onSubmit}
      >
        <InputField<FormType> name="firstName" type="text" label="First name" />
        <InputField<FormType> name="lastName" type="text" label="Last name" />
        <InputField<FormType> name="email" type="email" label="Email" />
        <InputField<FormType>
          name="password"
          type="password"
          label="Password"
        />
        <p className="text-center">
          Already have an account? <Link to={routes.login}>Log in</Link>
        </p>

        <Button primary disabled={isLoading}>
          Create an account
        </Button>
      </Form>
      {user && (
        <span>To continue registration check your email {user.email}</span>
      )}
      {error && <span>{error.message}</span>}
    </div>
  );
};
