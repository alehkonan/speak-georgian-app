import { routes } from 'src/app/routes';
import { useResetPassword } from 'src/features/resetPassword';
import {
  Button,
  ErrorMessage,
  Form,
  InputField,
  Screen,
} from 'src/shared/components';
import * as zod from 'zod';

const schema = zod.object({
  email: zod.string().email(),
});

type FormType = zod.infer<typeof schema>;

export const ForgotPasswordScreen = () => {
  const { onUpdatePassword, isLoading, error } = useResetPassword();

  const onSubmit = (data: FormType) => {
    onUpdatePassword(data.email);
  };

  return (
    <Screen name="Reset password" showName backTo={routes.login}>
      <Form<FormType>
        className="grid gap-2"
        schema={schema}
        onSubmit={onSubmit}
      >
        <InputField<FormType> name="email" type="email" label="Email" />
        <Button primary disabled={isLoading}>
          Reset password
        </Button>
      </Form>
      {error && <ErrorMessage message={error.message} />}
    </Screen>
  );
};
