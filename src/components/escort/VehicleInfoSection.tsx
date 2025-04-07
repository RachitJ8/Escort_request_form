import React from "react";
import { FormInput } from "./FormInput";
import { FormSelect } from "./FormSelect";
import { RadioGroup } from "@/components/ui/radio-group";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export const VehicleInfoSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-[#663399] font-medium text-center text-lg mb-4">Vehicle Information</h2>
      
      <div className="space-y-3">
        <div className="flex items-center">
          <div className="w-1/2">
            <label className="block text-[#663399] text-sm">
              Vehicle License#<span className="text-red-500">*</span>
            </label>
          </div>
          <div className="w-1/2">
            <FormInput name="vehicleLicense" placeholder="Enter License#" />
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="w-1/2">
            <label className="block text-[#663399] text-sm">
              State<span className="text-red-500">*</span>
            </label>
          </div>
          <div className="w-1/2">
            <FormInput name="state" placeholder="Enter State" />
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="w-1/2">
            <label className="block text-[#663399] text-sm">
              Vehicle Type<span className="text-red-500">*</span>
            </label>
          </div>
          <div className="w-1/2">
            <FormSelect 
              name="vehicleType"
              options={[]} 
              placeholder="Select Vehicle"
            />
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="w-1/2">
            <label className="block text-[#663399] text-sm">
              Vehicle Color<span className="text-red-500">*</span>
            </label>
          </div>
          <div className="w-1/2">
            <FormSelect 
              name="vehicleColor"
              options={[]} 
              placeholder="Select Color"
            />
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="w-1/2">
            <label className="block text-[#663399] text-sm">
              Reason for Escort<span className="text-red-500">*</span>
            </label>
            <p className="text-xs text-gray-600 mt-0.5">Reason for Escort & location they are going to:</p>
          </div>
          <div className="w-1/2">
            <textarea
              name="reasonForEscort"
              className="w-full p-2 bg-[#F4F0F9] border border-gray-300 rounded-md"
              placeholder="Enter Reason & location"
              rows={3}
            ></textarea>
          </div>
        </div>
        
        <div className="flex items-start mt-4">
          <div className="w-1/2">
            <label className="block text-[#663399] text-sm">
              Auth by OPS.
            </label>
            <p className="text-xs text-gray-600 mt-0.5">This option is for any extra large equipment, vehicle or situation requiring operations approval.</p>
          </div>
          <div className="w-1/2 flex space-x-8">
            <RadioGroup defaultValue="no" className="flex gap-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="yes" />
                <Label htmlFor="yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no">No</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  );
};
