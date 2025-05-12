
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

export const ProhibitedItemsSection: React.FC = () => {
  return (
    <div className="mb-6">
      <div className="mb-2">
        <h2 className="text-[#663399] font-medium text-lg">Prohibited Items<span className="text-red-500">*</span></h2>
        <p className="text-xs text-gray-600 mt-1">
          Did you ask the person(s) you are escorting if they have any prohibited items?
        </p>
      </div>
      
      <div className="flex items-center space-x-2 mb-2">
        <Checkbox id="prohibited" className="data-[state=checked]:bg-[#663399]" />
        <label htmlFor="prohibited" className="text-sm text-gray-700"></label>
      </div>
      
      <div className="mb-2">
        <label className="block text-[#663399] text-sm mb-1">Comments</label>
        <textarea
          name="comments"
          rows={2}
          className="w-full p-2 bg-[#E6DFEC] border-0 rounded-md"
          placeholder="Comments"
        ></textarea>
      </div>
    </div>
  );
};
