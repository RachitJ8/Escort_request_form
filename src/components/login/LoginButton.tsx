
import { cn } from "@/lib/utils";
import React from "react";

interface LoginButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const LoginButton = React.forwardRef<
  HTMLButtonElement,
  LoginButtonProps
>(({ className, children, ...props }, ref) => {
  return (
    <div className="flex w-full flex-col items-stretch px-4 py-2 mt-2">
      <button
        ref={ref}
        className={cn(
          "bg-[#36225c] min-h-[50px] w-full",
          "px-4 py-3.5 rounded-[48px] text-white",
          "font-medium text-center text-lg transition-colors",
          "hover:bg-[#2b1a4d] focus:outline-none focus:ring-2 focus:ring-[rgba(83,37,126,0.2)]",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    </div>
  );
});

LoginButton.displayName = "LoginButton";
