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
      <div className="bg-[rgba(252,251,254,1)] min-h-[423px] w-full text-[#22142e] font-normal tracking-[-0.09px]">
        <div className="w-full py-12">
          <div className="bg-[rgba(252,251,254,1)] w-full text-[28px] text-[rgba(33,27,40,1)] font-bold text-center tracking-[-0.56px]">
            <div className="w-full pt-6 pb-4 px-4">Escort Request Form</div>
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
