
import React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface PhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <div className="relative flex w-full">
          <div className="flex items-center bg-[#F4F0F9] px-2 rounded-l-md border-r border-gray-300 min-w-[56px]">
            <span className="text-gray-500 text-sm">US</span>
            <ChevronDown size={14} className="text-gray-500 ml-1" />
          </div>
          <input
            ref={ref}
            type="tel"
            className={cn(
              "flex-1 px-3 py-2 bg-[#F4F0F9] rounded-r-md",
              "placeholder:text-gray-500 text-sm",
              "focus:outline-none focus:ring-2 focus:ring-[#663399]",
              className,
            )}
            {...props}
          />
        </div>
        {error && (
          <span className="text-xs text-red-500 mt-1">{error}</span>
        )}
      </div>
    );
  },
);

PhoneInput.displayName = "PhoneInput";
