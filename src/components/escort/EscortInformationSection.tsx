
import React from "react";
import { FormInput } from "./FormInput";
import { FormSelect } from "./FormSelect";
import { DatePickerInput } from "./DatePickerInput";
import { PhoneInput } from "./PhoneInput";

export const EscortInformationSection: React.FC = () => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#663399] font-medium text-lg">Escort Information</h2>
        <button
          type="button"
          className="bg-[#663399] text-white rounded-md px-3 py-1 text-sm font-medium"
        >
          Add Escort/Driver
        </button>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center">
          <div className="w-1/2">
            <label className="block text-[#663399] text-sm">
              First Name<span className="text-red-500">*</span>
            </label>
          </div>
          <div className="w-1/2">
            <FormInput defaultValue="Rachit" name="firstName" placeholder="First Name" />
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="w-1/2">
            <label className="block text-[#663399] text-sm">
              Last Name<span className="text-red-500">*</span>
            </label>
          </div>
          <div className="w-1/2">
            <FormInput defaultValue="Jain" name="lastName" placeholder="Last Name" />
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="w-1/2">
            <label className="block text-[#663399] text-sm">
              Badge Number<span className="text-red-500">*</span>
            </label>
          </div>
          <div className="w-1/2">
            <FormInput defaultValue="12345678" name="badgeNumber" placeholder="Badge Number" />
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="w-1/2">
            <label className="block text-[#663399] text-sm">
              Date of Birth<span className="text-red-500">*</span>
            </label>
          </div>
          <div className="w-1/2">
            <DatePickerInput defaultValue="12/08/1997" name="dob" placeholder="MM/DD/YYYY" />
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="w-1/2">
            <label className="block text-[#663399] text-sm">
              Phone<span className="text-red-500">*</span>
            </label>
          </div>
          <div className="w-1/2">
            <PhoneInput defaultValue="7550169223" name="phone" placeholder="1234567890" />
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="w-1/2">
            <label className="block text-[#663399] text-sm">
              Email<span className="text-red-500">*</span>
            </label>
          </div>
          <div className="w-1/2">
            <FormInput defaultValue="rjain@lawa.org" name="email" placeholder="abc@mail.com" type="email" />
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
              defaultValue="bsi"
              options={[{ value: "bsi", label: "BSI" }]} 
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
              defaultValue="yes"
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" }
              ]} 
              placeholder="Select"
            />
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="w-1/2">
            <label className="block text-[#663399] text-sm">
              "D" Icon<span className="text-red-500">*</span>
            </label>
          </div>
          <div className="w-1/2">
            <FormSelect 
              defaultValue="yes"
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" }
              ]} 
              placeholder="Select"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
