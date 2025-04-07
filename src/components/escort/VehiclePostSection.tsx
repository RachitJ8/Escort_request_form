
import React from "react";
import { FormSelect } from "./FormSelect";

export const VehiclePostSection: React.FC = () => {
  return (
    <div className="flex items-center w-full">
      <div className="w-1/2">
        <label className="block text-[#663399] text-sm mb-1">
          Vehicle Post <span className="text-red-500">*</span>
        </label>
      </div>
      <div className="w-1/2">
        <FormSelect 
          options={[{ value: "gate1", label: "Gate 1" }]}
          defaultValue="gate1"
          placeholder="Select Gate"
        />
      </div>
    </div>
  );
};
