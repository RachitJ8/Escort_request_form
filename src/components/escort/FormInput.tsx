
import React from "react";
import { cn } from "@/lib/utils";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          ref={ref}
          className={cn(
            "w-full px-3 py-2 bg-[#E6DFEC] rounded-md",
            "placeholder:text-gray-500 text-sm",
            "focus:outline-none focus:ring-2 focus:ring-[#663399]",
            className,
          )}
          {...props}
        />
        {error && (
          <span className="text-xs text-red-500 mt-1">{error}</span>
        )}
      </div>
    );
  },
);

FormInput.displayName = "FormInput";
