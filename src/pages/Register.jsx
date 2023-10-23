import { Form, Link, redirect } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { toast } from "react-toastify";
import { customFetch } from "../utils";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post("/auth/local/register", data);
    toast.success("account created successfully");
    return redirect("/login");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "please double check you credentials";
    toast.error(errorMessage);
    return null;
  }
};
const Register = () => {
  return (
    <section className="min-h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 flex flex-col space-y-4 p-8 bg-base-100 shadow-lg "
      >
        <h4 className="text-3xl text-center text-bold text-green-700 capitalize">
          Register
        </h4>
        <FormInput type="text" label="username" name="username" />
        <FormInput type="email" label="email" name="email" />
        <FormInput type="password" label="password" name="password" />
        <div className="mt-4">
          <SubmitBtn text="register" />
        </div>
        <p className="text-center">
          Already a Member ?{" "}
          <Link
            className="ml-2  capitalize link link-hover link-primary"
            to="/login"
          >
            Login
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Register;
