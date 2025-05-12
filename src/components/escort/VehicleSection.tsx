
import React from "react";
import { FormSelect } from "./FormSelect";

export const VehicleSection: React.FC = () => {
  return (
    <div className="mb-6">
      <div className="flex items-center mb-3">
        <div className="w-1/2">
          <label className="block text-[#663399] text-sm">
            Vehicle Type<span className="text-red-500">*</span>
          </label>
        </div>
        <div className="w-1/2">
          <FormSelect 
            options={[{ value: "car", label: "Car" }]}
            placeholder="Select Vehicle"
          />
        </div>
      </div>
      
      <div className="flex items-center">
        <div className="w-1/2">
          <label className="block text-[#663399] text-sm">
            Vehicle Post #<span className="text-red-500">*</span>
          </label>
        </div>
        <div className="w-1/2">
          <FormSelect 
            options={[{ value: "gate1", label: "Gate 1" }]}
            placeholder="Select Post"
          />
        </div>
      </div>
    </div>
  );
};
