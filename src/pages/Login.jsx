import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { loginUser } from "../features/user/userSlice";

import { toast } from "react-toastify";
import { customFetch } from "../utils";
import { useDispatch } from "react-redux";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log(data);

    try {
      const response = await customFetch.post("/auth/local", data);
      store.dispatch(loginUser(response.data));
      toast.success("logged in successfully");
      return redirect("/");
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        "please double check your credentials";
      toast.error(errorMessage);
      return null;
    }
  };
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch.post("/auth/local", {
        identifier: "test@test.com",
        password: "secret",
      });
      dispatch(loginUser(response.data));
      toast.success("welcome guest user");
      navigate("/");
    } catch (err) {
      toast.error("guest user login error.please try later");
    }
  };
  return (
    <section className="min-h-screen grid place-items-center">
      <Form
        method="post"
        className="card flex flex-col space-y-4 p-8 bg-base-100 shadow-lg w-96"
      >
        <h4 className="text-3xl font-bold text-center capitalize">Login</h4>
        <FormInput
          name="identifier"
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
        <button
          className="btn btn-secondary btn-block"
          onClick={loginAsGuestUser}
        >
          Guest User
        </button>
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
