
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface CountryOption {
  label: string;
  value: string;
  code: string;
}

const countries: CountryOption[] = [
  { label: "US", value: "us", code: "+1" },
  { label: "CA", value: "ca", code: "+1" },
  { label: "UK", value: "uk", code: "+44" },
  { label: "AU", value: "au", code: "+61" },
  { label: "DE", value: "de", code: "+49" },
  { label: "FR", value: "fr", code: "+33" },
  { label: "JP", value: "jp", code: "+81" },
  { label: "IN", value: "in", code: "+91" },
  { label: "BR", value: "br", code: "+55" },
  { label: "CN", value: "cn", code: "+86" },
];

interface PhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  onValueChange?: (value: string, countryCode: string) => void;
}

export const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ className, error, onValueChange, value, ...props }, ref) => {
    const [selectedCountry, setSelectedCountry] = useState<CountryOption>(countries[0]);
    const [phoneValue, setPhoneValue] = useState<string>(value as string || "");
    
    const handleCountryChange = (country: CountryOption) => {
      setSelectedCountry(country);
      if (onValueChange && phoneValue) {
        onValueChange(phoneValue, country.code);
      }
    };
    
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      
      // Only allow digits and limit to 10 characters
      const sanitizedValue = newValue.replace(/\D/g, '').slice(0, 10);
      
      setPhoneValue(sanitizedValue);
      
      if (onValueChange) {
        onValueChange(sanitizedValue, selectedCountry.code);
      }
    };
    
    return (
      <div className="w-full">
        <div className="relative flex w-full">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center bg-[#E6DFEC] px-3 py-2 rounded-l-md border-r border-gray-300 min-w-[68px]">
              <span className="text-gray-700 text-sm mr-1">{selectedCountry.label}</span>
              <ChevronDown size={14} className="text-gray-500" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border border-gray-200 rounded-md shadow-md">
              {countries.map((country) => (
                <DropdownMenuItem 
                  key={country.value} 
                  className="flex items-center px-3 py-2 text-sm hover:bg-[#F5F2F7] cursor-pointer"
                  onClick={() => handleCountryChange(country)}
                >
                  <span>{country.label}</span>
                  <span className="text-gray-500 ml-2 text-xs">({country.code})</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <input
            ref={ref}
            type="tel"
            inputMode="numeric"
            pattern="[0-9]*"
            value={phoneValue}
            onChange={handlePhoneChange}
            className={cn(
              "flex-1 px-3 py-2 bg-[#E6DFEC] rounded-r-md",
              "placeholder:text-gray-500 text-sm",
              "focus:outline-none focus:ring-2 focus:ring-[#663399]",
              className,
            )}
            {...props}
          />
        </div>
        {error && (
          <span className="text-xs text-red-500 mt-1 block">{error}</span>
        )}
      </div>
    );
  },
);

PhoneInput.displayName = "PhoneInput";
