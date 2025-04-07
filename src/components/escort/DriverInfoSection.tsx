
import React from "react";
import { FormInput } from "./FormInput";
import { FormSelect } from "./FormSelect";
import { DatePickerInput } from "./DatePickerInput";
import { PhoneInput } from "./PhoneInput";

export const DriverInfoSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-[#663399] font-medium text-center text-lg mb-4">Escort Driver Information</h2>
      
      <div className="space-y-3">
        <div className="flex items-center">
          <div className="w-1/2">
            <label className="block text-[#663399] text-sm">
              First Name<span className="text-red-500">*</span>
            </label>
          </div>
          <div className="w-1/2">
            <FormInput name="firstName" placeholder="First Name" />
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="w-1/2">
            <label className="block text-[#663399] text-sm">
              Last Name<span className="text-red-500">*</span>
            </label>
          </div>
          <div className="w-1/2">
            <FormInput name="lastName" placeholder="Last Name" />
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="w-1/2">
            <label className="block text-[#663399] text-sm">
              Date of Birth<span className="text-red-500">*</span>
            </label>
          </div>
          <div className="w-1/2">
            <DatePickerInput name="dob" placeholder="MM/DD/YYYY" />
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="w-1/2">
            <label className="block text-[#663399] text-sm">
              Phone<span className="text-red-500">*</span>
            </label>
          </div>
          <div className="w-1/2">
            <PhoneInput name="phone" placeholder="1234567890" />
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="w-1/2">
            <label className="block text-[#663399] text-sm">
              Email<span className="text-red-500">*</span>
            </label>
          </div>
          <div className="w-1/2">
            <FormInput name="email" placeholder="abc@mail.com" type="email" />
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="w-1/2">
            <label className="block text-[#663399] text-sm">
              Badge Number<span className="text-red-500">*</span>
            </label>
          </div>
          <div className="w-1/2">
            <FormInput name="badgeNumber" placeholder="12345678" />
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="w-1/2">
            <label className="block text-[#663399] text-sm">
              Company<span className="text-red-500">*</span>
            </label>
          </div>
          <div className="w-1/2">
            <FormSelect 
              name="company"
              options={[]} 
              placeholder="Select company"
            />
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="w-1/2">
            <label className="block text-[#663399] text-sm">
              "E" Icon<span className="text-red-500">*</span>
            </label>
          </div>
          <div className="w-1/2">
            <FormSelect 
              name="eIcon"
              options={[]} 
              placeholder="Select"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
