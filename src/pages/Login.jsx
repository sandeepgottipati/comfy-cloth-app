import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
const Login = () => {
  return (
    <section className="min-h-screen grid place-items-center">
      <Form
        method="post"
        onSubmit={(e) => e.preventDefault()}
        className="card flex flex-col space-y-4 p-8 bg-base-100 shadow-lg w-96"
      >
        <h4 className="text-3xl font-bold text-center capitalize">Login</h4>
        <FormInput
          name="email"
          type="email"
          defaultValue="test@test.com"
          label="email"
        />
        <FormInput
          name="password"
          type="password"
          defaultValue="secret"
          label="password"
        />
        <div className="mt-4 ">
          <SubmitBtn text="login" />
        </div>
        <button className="btn btn-secondary btn-block">Guest User</button>
        <p className="text-center">
          Not a Member Yet?{" "}
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
