
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface FormFieldWrapperProps {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}

export const FormFieldWrapper: React.FC<FormFieldWrapperProps> = ({
  label,
  required = false,
  children
}) => {
  const isMobile = useIsMobile();
  
  return isMobile ? (
    <div className="flex items-center mb-3">
      <div className="w-1/2">
        <label className="block text-[#663399] text-sm font-medium">
          {label}{required && <span className="text-red-500">*</span>}
        </label>
      </div>
      <div className="w-1/2">
        {children}
      </div>
    </div>
  ) : (
    <div className="mb-3">
      <label className="block text-[#663399] text-sm font-medium mb-1">
        {label}{required && <span className="text-red-500">*</span>}
      </label>
      <div>
        {children}
      </div>
    </div>
  );
};
