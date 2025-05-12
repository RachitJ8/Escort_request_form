
import React from "react";
import { FormInput } from "./FormInput";
import { FormSelect } from "./FormSelect";

export const VehicleInformationSection: React.FC = () => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#663399] font-medium text-lg">Vehicle Information</h2>
        <button
          type="button"
          className="bg-[#663399] text-white rounded-md px-3 py-1 text-sm font-medium"
        >
          Add Vehicle
        </button>
      </div>
      
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
              Vehicle Color<span className="text-red-500">*</span>
            </label>
          </div>
          <div className="w-1/2">
            <FormSelect 
              options={[
                { value: "red", label: "Red" },
                { value: "blue", label: "Blue" },
                { value: "black", label: "Black" },
                { value: "white", label: "White" }
              ]} 
              placeholder="Select Color"
            />
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="w-1/2">
            <label className="block text-[#663399] text-sm">
              Vehicle Driver<span className="text-red-500">*</span>
            </label>
          </div>
          <div className="w-1/2">
            <FormSelect 
              options={[]} 
              placeholder="Select Driver"
            />
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="w-1/2">
            <label className="block text-[#663399] text-sm">
              Reason for Escort<span className="text-red-500">*</span>
            </label>
          </div>
          <div className="w-1/2">
            <div className="text-xs text-gray-600 mb-1">
              Reason for Escort & location they are going to.
            </div>
            <textarea
              name="reasonForEscort"
              rows={2}
              className="w-full p-2 bg-[#E6DFEC] border-0 rounded-md text-sm"
              placeholder="Enter Reason & location"
            ></textarea>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="w-1/2">
            <label className="block text-[#663399] text-sm">
              Auth by OPS.
            </label>
            <p className="text-xs text-gray-600">
              This option is for any extra large equipment, vehicle or situation required to have special approval.
            </p>
          </div>
          <div className="w-1/2 flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input type="radio" name="authByOps" value="yes" className="w-4 h-4 text-[#663399]" />
              <span className="text-sm">Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="authByOps" value="no" className="w-4 h-4 text-[#663399]" defaultChecked />
              <span className="text-sm">No</span>
            </label>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="w-1/2">
            <label className="block text-[#663399] text-sm">
              Upload License Image<span className="text-red-500">*</span>
            </label>
          </div>
          <div className="w-1/2">
            <button
              type="button"
              className="bg-[#663399] text-white rounded-md px-4 py-1.5 text-sm"
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
