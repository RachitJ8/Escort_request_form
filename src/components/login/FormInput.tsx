import React from "react";
import { cn } from "@/lib/utils";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="bg-[rgba(252,251,254,1)] flex w-full flex-col items-stretch leading-none justify-center px-4 py-2">
        <input
          ref={ref}
          className={cn(
            "self-stretch flex-1 shrink basis-[0%] bg-[rgba(83,37,126,0.09)] w-full gap-2 px-[13px] py-3.5 rounded-2xl",
            "placeholder:text-[#22142e] placeholder:font-normal placeholder:tracking-[-0.09px]",
            "focus:outline-none focus:ring-2 focus:ring-[rgba(83,37,126,0.2)]",
            className,
          )}
          placeholder={label}
          {...props}
        />
        {error && (
          <span className="text-sm text-red-500 mt-1 ml-2">{error}</span>
        )}
      </div>
    );
  },
);

FormInput.displayName = "FormInput";
