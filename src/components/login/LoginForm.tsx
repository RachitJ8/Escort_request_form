
import React from "react";
import { useForm } from "react-hook-form";
import { FormInput } from "./FormInput";
import { CaptchaInput } from "./CaptchaInput";
import { LoginButton } from "./LoginButton";

interface LoginFormData {
  firstName: string;
  lastName: string;
  badgeNumber: string;
  captcha: string;
}

export const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full">
        <div className="w-full">
          <div className="w-full text-center mb-6">
            <img
              src="/lovable-uploads/eeea6472-2307-4c20-91e0-98454d21ba1f.png"
              alt="Escort Service"
              className="w-16 h-16 mx-auto mb-2"
            />
            <h1 className="text-[28px] text-[#222] font-bold">
              Escort Request Form
            </h1>
          </div>

          <FormInput
            label="First Name"
            {...register("firstName", { required: "First name is required" })}
            error={errors.firstName?.message}
          />

          <FormInput
            label="Last Name"
            {...register("lastName", { required: "Last name is required" })}
            error={errors.lastName?.message}
          />

          <FormInput
            label="Badge Number"
            {...register("badgeNumber", {
              required: "Badge number is required",
            })}
            error={errors.badgeNumber?.message}
          />

          <CaptchaInput
            captchaText="X1sw3A"
            {...register("captcha", { required: "Captcha is required" })}
          />

          <LoginButton type="submit">Log In</LoginButton>
        </div>
      </div>
    </form>
  );
};
