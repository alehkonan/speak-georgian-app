import { useNavigate } from 'react-router-dom';
import { routes } from 'src/app/routes';
import { useUpdatePassword } from 'src/features/updatePassword';
import { Button, ErrorMessage, Form, InputField } from 'src/shared/components';
import * as zod from 'zod';

const schema = zod.object({
  password: zod
    .string()
    .min(8, 'Should contain at least 8 characters')
    .regex(/\d/, 'Should contain a digit')
    .regex(/\W/, 'Should contain a symbol')
    .regex(/[A-Z]/, 'Should contain uppercase letter')
    .regex(/[a-z]/, 'Should contain lowercase letter'),
});

type FormType = zod.infer<typeof schema>;

const UpdatePasswordScreen = () => {
  const navigate = useNavigate();
  const { onUpdatePassword, isLoading, error } = useUpdatePassword();

  const onSubmit = (data: FormType) => {
    onUpdatePassword(data.password);
  };

  return (
    <div className="p-4 grid gap-4">
      <h2 className="text-xl font-bold">Reset password</h2>
      <Form<FormType> className="grid gap-2" schema={schema} onSubmit={onSubmit}>
        <InputField<FormType> name="password" type="password" label="New password" />
        <Button primary disabled={isLoading}>
          Update password
        </Button>
        <Button onClick={() => navigate(routes.home)}>Go to main screen</Button>
      </Form>
      {error && <ErrorMessage message={error.message} />}
    </div>
  );
};

export default UpdatePasswordScreen;
