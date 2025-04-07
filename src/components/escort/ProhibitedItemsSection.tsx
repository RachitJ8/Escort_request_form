
import React from "react";

export const ProhibitedItemsSection: React.FC = () => {
  return (
    <div className="bg-[#F4F0F9] rounded-lg p-4">
      <div className="mb-2">
        <h3 className="text-[#663399] text-sm font-medium">
          Prohibited Items<span className="text-red-500">*</span>
        </h3>
        <p className="text-xs text-gray-600 mt-1">
          Did you ask the person(s) you are escorting if they have any prohibited items?
        </p>
      </div>
      
      <div className="flex items-center space-x-4 mb-2">
        <label className="flex items-center">
          <input type="checkbox" className="w-4 h-4 text-[#663399]" />
        </label>
      </div>
      
      <div className="mb-2">
        <label className="block text-[#663399] text-sm mb-1">Comments</label>
        <textarea
          name="comments"
          rows={3}
          className="w-full p-2 bg-[#F4F0F9] border border-gray-300 rounded-md"
          placeholder="Comments"
        ></textarea>
      </div>
    </div>
  );
};
