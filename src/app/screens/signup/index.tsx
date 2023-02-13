import { Link, useNavigate } from 'react-router-dom';
import { routes } from 'src/app/routes';
import { useSignUp } from 'src/features/signup';
import {
  Button,
  ErrorMessage,
  Form,
  IconButton,
  InputField,
} from 'src/shared/components';
import { ChevronLeftIcon } from 'src/shared/icons';
import * as zod from 'zod';

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
  const navigate = useNavigate();
  const { onSignUp, isLoading, error } = useSignUp();

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
    <div className="grid gap-4">
      <div className="flex items-center gap-3">
        <IconButton onClick={() => navigate(routes.welcome)}>
          <ChevronLeftIcon />
        </IconButton>
        <h2 className="text-xl font-bold">Create your account</h2>
      </div>
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
          Already have an account?{' '}
          <Link className="text-steel-blue" to={routes.login}>
            Log in
          </Link>
        </p>

        <Button primary disabled={isLoading}>
          Create an account
        </Button>
      </Form>
      {error && <ErrorMessage message={error.message} />}
    </div>
  );
};
