
import React from "react";
import { LoginForm } from "./LoginForm";

export const LoginScreen: React.FC = () => {
  return (
    <div className="bg-white flex max-w-[380px] w-full flex-col overflow-hidden items-stretch mx-auto rounded-[20px] shadow-sm">
      <div className="w-full py-8">
        <LoginForm />
      </div>
    </div>
  );
};
