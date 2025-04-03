
import React from "react";
import { cn } from "@/lib/utils";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="flex w-full flex-col items-stretch px-4 py-2">
        <input
          ref={ref}
          className={cn(
            "w-full bg-[#efe9f4] px-[13px] py-3.5 rounded-2xl",
            "placeholder:text-[#666] placeholder:font-normal placeholder:tracking-[-0.09px]",
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
