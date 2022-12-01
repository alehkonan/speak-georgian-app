import { Button, Form, InputField } from 'src/shared/components';
import * as zod from 'zod';

const schema = zod.object({
  email: zod.string().email().min(2),
  password: zod.string().min(6),
});

type FormType = zod.infer<typeof schema>;

export const LoginScreen = () => {
  const onSubmit = (data: FormType) => {
    console.log(data);
  };

  return (
    <div className="p-4 grid gap-4">
      <h2 className="text-xl font-bold">Create your account</h2>
      <Form<FormType>
        className="grid gap-2"
        schema={schema}
        onSubmit={onSubmit}
      >
        <InputField<FormType> name="email" type="email" label="Email" />
        <InputField<FormType>
          name="password"
          type="password"
          label="Password"
        />
        <Button primary type="submit">
          Log in
        </Button>
      </Form>
    </div>
  );
};
