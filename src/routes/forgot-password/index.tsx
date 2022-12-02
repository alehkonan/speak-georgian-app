import { Button, Form, InputField } from 'src/shared/components';
import * as zod from 'zod';

const schema = zod.object({
  email: zod.string().email(),
});

type FormType = zod.infer<typeof schema>;

export const ForgotPasswordScreen = () => {
  const onSubmit = (data: FormType) => {
    // send request to reset password
    console.log(data);
  };

  return (
    <div className="p-4 grid gap-4">
      <h2 className="text-xl font-bold">Reset password</h2>
      <Form<FormType>
        className="grid gap-2"
        schema={schema}
        onSubmit={onSubmit}
      >
        <InputField<FormType> name="email" type="email" label="Email" />
        <Button primary>Reset password</Button>
      </Form>
    </div>
  );
};
