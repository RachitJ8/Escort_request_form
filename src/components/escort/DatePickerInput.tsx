
import React from "react";
import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";

interface DatePickerInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const DatePickerInput = React.forwardRef<HTMLInputElement, DatePickerInputProps>(
  ({ className, placeholder, error, ...props }, ref) => {
    const [date, setDate] = React.useState<Date>();
    
    return (
      <div className="w-full">
        <Popover>
          <PopoverTrigger asChild>
            <div className="relative w-full">
              <input
                ref={ref}
                readOnly
                value={date ? format(date, "MM/dd/yyyy") : ""}
                placeholder={placeholder || "MM/DD/YYYY"}
                className={cn(
                  "w-full px-3 py-2 bg-[#F4F0F9] rounded-md",
                  "placeholder:text-gray-500 text-sm cursor-pointer",
                  "focus:outline-none focus:ring-2 focus:ring-[#663399]",
                  className,
                )}
                {...props}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <Calendar size={16} className="text-gray-500" />
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="p-0 w-auto" align="start">
            <CalendarComponent
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
              className={cn("p-3 pointer-events-auto")}
            />
          </PopoverContent>
        </Popover>
        {error && (
          <span className="text-xs text-red-500 mt-1">{error}</span>
        )}
      </div>
    );
  },
);

DatePickerInput.displayName = "DatePickerInput";
