import { SubmitHandler, useForm } from "react-hook-form";
import { Form, Link } from "react-router-dom";
import { LOGIN } from "../../routes/routes";

type SignUpValues = {
  name: string;
  email: string;
  password: string;
};

type ValidatedSignUpClass = {
  name: string;
  email: string;
  password: string;
};

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpValues>({ mode: "onTouched" });

  const onSubmit: SubmitHandler<SignUpValues> = (data) => {
    console.log(data);
  };

  const errorClass: ValidatedSignUpClass = {
    name: errors.name?.message ? "error" : "",
    email: errors.email?.message ? "error" : "",
    password: errors.password?.message ? "error" : "",
  };

  return (
    <Form method="POST" onSubmit={handleSubmit(onSubmit)} className="flex-col margin-center">
      <div className="flex flex-gap-medium">
        <label htmlFor="signUpName" className="flex-1">
          Full Name:
        </label>
        <div className="flex-col gap-zero flex-1">
          <input
            type="text"
            id="signUpName"
            autoComplete="off"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name should contain at least three characters",
              },
            })}
            className={`flex-1 ${errorClass.name}`}
          />
          <p className="text-error">{errors?.name?.message}</p>
        </div>
      </div>

      <div className="flex flex-gap-medium">
        <label htmlFor="signUpEmail" className="flex-1">
          Email:
        </label>
        <div className="flex-col gap-zero flex-1">
          <input
            type="email"
            id="signUpEmail"
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
        <label htmlFor="signUpPassword" className="flex-1">
          Password:
        </label>
        <div className="flex-col gap-zero flex-1">
          <input
            type="password"
            id="signUpPassword"
            autoComplete="off"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 8, message: "Password should contain at least 8 characters" },
            })}
            className={`flex-1 ${errorClass.password}`}
          />
          <p className="text-error">{errors?.password?.message}</p>
        </div>
      </div>
      <button type="submit" className="btn btn-primary self-center vertical">Sign Up</button>
      <p>
        Already have an account? <Link to={LOGIN} className="link">Login</Link>
      </p>
    </Form>
  );
};
