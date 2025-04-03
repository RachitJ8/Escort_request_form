
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
    <div className="relative px-4 py-2">
      <div className="flex w-full items-center gap-2">
        <input
          ref={ref}
          className={cn(
            "flex-1 bg-[#efe9f4] w-full px-[13px] py-3.5 rounded-2xl",
            "placeholder:text-[#666] placeholder:font-normal placeholder:tracking-[-0.09px]",
            "focus:outline-none focus:ring-2 focus:ring-[rgba(83,37,126,0.2)]",
            className,
          )}
          placeholder="Captcha"
          {...props}
        />
        <div className="flex items-center gap-2 text-[#22142e] text-[16px] font-normal">
          {captchaText}
          <img
            src="/lovable-uploads/eeea6472-2307-4c20-91e0-98454d21ba1f.png"
            className="w-5 h-5 cursor-pointer"
            alt="Refresh captcha"
          />
        </div>
      </div>
      <div className="text-[#777] text-[11px] font-normal mt-1.5">
        Captcha letters are case sensitive and should be entered as shown
      </div>
    </div>
  );
});

CaptchaInput.displayName = "CaptchaInput";
