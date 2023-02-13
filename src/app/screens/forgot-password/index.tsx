import { useNavigate } from 'react-router-dom';
import { routes } from 'src/app/routes';
import { useResetPassword } from 'src/features/resetPassword';
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
  email: zod.string().email(),
});

type FormType = zod.infer<typeof schema>;

export const ForgotPasswordScreen = () => {
  const navigate = useNavigate();
  const { onUpdatePassword, isLoading, error } = useResetPassword();

  const onSubmit = (data: FormType) => {
    onUpdatePassword(data.email);
  };

  return (
    <div className="grid gap-4">
      <div className="flex items-center gap-3">
        <IconButton
          title="Back to login screen"
          onClick={() => navigate(routes.login)}
        >
          <ChevronLeftIcon />
        </IconButton>
        <h2 className="text-xl font-bold">Reset password</h2>
      </div>

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
    </div>
  );
};
