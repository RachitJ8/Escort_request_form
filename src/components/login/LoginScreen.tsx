import React from "react";
import { LoginHeader } from "./LoginHeader";
import { LoginForm } from "./LoginForm";

export const LoginScreen: React.FC = () => {
  return (
    <div className="bg-[rgba(252,251,254,1)] flex max-w-[480px] w-full flex-col overflow-hidden items-stretch mx-auto pb-[305px] rounded-[20px]">
      <LoginHeader />
      <div className="mt-[-99px] w-full text-[17px] py-11">
        <LoginForm />
      </div>
    </div>
  );
};
