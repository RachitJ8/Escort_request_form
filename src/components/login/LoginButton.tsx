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
    <div className="bg-[rgba(252,251,254,1)] flex w-full flex-col items-stretch justify-center p-4">
      <button
        ref={ref}
        className={cn(
          "self-stretch flex-1 shrink basis-[0%] bg-[rgba(68,29,104,1)] min-h-[50px] w-full",
          "gap-2 overflow-hidden px-4 py-3.5 rounded-[48px] text-[rgba(222,215,228,1)]",
          "font-medium text-center leading-none transition-colors",
          "hover:bg-[rgba(83,37,126,1)] focus:outline-none focus:ring-2 focus:ring-[rgba(83,37,126,0.2)]",
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
