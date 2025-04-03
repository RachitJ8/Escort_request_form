import React from "react";
import { cn } from "@/lib/utils";

interface CaptchaInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  captchaText: string;
}

export const CaptchaInput = React.forwardRef<
  HTMLInputElement,
  CaptchaInputProps
>(({ className, captchaText, ...props }, ref) => {
  return (
    <div className="relative">
      <div className="text-[#22142e] text-[17px] font-normal leading-none tracking-[-0.09px] mb-2 ml-4">
        {captchaText}
      </div>
      <div className="flex w-full flex-col text-[17px] text-[#22142e] font-normal whitespace-nowrap tracking-[-0.09px] leading-none pl-4 pr-[50px] pb-[15px]">
        <input
          ref={ref}
          className={cn(
            "flex-1 shrink basis-[0%] bg-[rgba(83,37,126,0.09)] gap-2 px-[13px] py-3.5 rounded-2xl",
            "focus:outline-none focus:ring-2 focus:ring-[rgba(83,37,126,0.2)]",
            className,
          )}
          placeholder="Captcha"
          {...props}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/21d47016b00f4f818ed8daead65ad274/ec41e83ed4509d678d505e140b1dd38a6924ade6?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-5 absolute right-[60px] top-[45px]"
          alt="Refresh captcha"
        />
      </div>
      <div className="text-[#22142e] text-[11px] font-normal leading-none tracking-[-0.06px] ml-4 mt-1.5">
        Captcha letters are case sensitive and should be entered as shown
      </div>
    </div>
  );
});

CaptchaInput.displayName = "CaptchaInput";
