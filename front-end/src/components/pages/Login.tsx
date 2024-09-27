import { Form, Link } from "react-router-dom";
import { SIGN_UP } from "../../routes/routes";
import { SubmitHandler, useForm } from "react-hook-form";

type LoginValues = {
  email: string;
  password: string;
};

type ValidatedLoginClass = {
  email: string;
  password: string;
}

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginValues>({ mode: "onTouched" });

  const onSubmit: SubmitHandler<LoginValues> = (data) => {
    console.log(data);
    reset();
  };

  const errorClass : ValidatedLoginClass = {
    email: errors.email?.message ? "error" : "",
    password: errors.password?.message ? "error" : ""
  }

  return (
    <Form method="POST" onSubmit={handleSubmit(onSubmit)} className="flex-col margin-center">
      <div className="flex flex-gap-medium">
        <label htmlFor="loginEmail" className="flex-1">
          Email:
        </label>
        <div className="flex-col gap-zero">
          <input
            type="email"
            id="loginEmail"
            autoComplete="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                message: "Email is invalid",
              },
            })}
            className={`flex-1 ${errorClass.email}`}
          />
          <p className="text-error">{errors?.email?.message}</p>
        </div>
      </div>
      <div className="flex flex-gap-medium">
        <label htmlFor="loginPassword" className="flex-1">
          Password:
        </label>
        <div className="flex-col gap-zero">
          <input
            type="password"
            id="loginPassword"
            autoComplete="off"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 8, message: "Password should contain at least 8 characters" },
            })}
            className={`flex-1 ${errorClass.password}`}
          />
          <p className="text-error">{errors?.password?.message}</p>
        </div>
        {/* <p>Forgot Password?</p> */}
      </div>
      <button type="submit" className="btn btn-primary self-center vertical">Sign In</button>
      <p>
        Do not have an account? <Link to={SIGN_UP} className="link">Register</Link>
      </p>
    </Form>
  );
};
