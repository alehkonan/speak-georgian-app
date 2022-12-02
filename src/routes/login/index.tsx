import { useNavigate } from 'react-router-dom';
import { Button, Form, InputField, Link } from 'src/shared/components';
import * as zod from 'zod';
import { routes } from '..';

const schema = zod.object({
  email: zod.string().email(),
  password: zod.string(),
});

type FormType = zod.infer<typeof schema>;

export const LoginScreen = () => {
  const navigate = useNavigate();

  const onSubmit = (data: FormType) => {
    // send request to login
    console.log(data);
  };

  return (
    <div className="p-4 grid gap-4">
      <h2 className="text-xl font-bold">Log in</h2>
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
        <Link className="justify-self-end" to={routes.forgotPassword}>
          Forgot password
        </Link>
        <Button primary>Log in</Button>
        <Button type="button" onClick={() => navigate(routes.signin)}>
          Sign up
        </Button>
      </Form>
    </div>
  );
};
