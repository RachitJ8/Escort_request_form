
import React from "react";

export const FormButtons: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <button
        type="button"
        className="w-full py-3 bg-[#C12E24] text-white font-medium rounded-md hover:bg-red-700 transition-colors"
      >
        Cancel
      </button>
      <button
        type="submit"
        className="w-full py-3 bg-[#663399] text-white font-medium rounded-md hover:bg-[#532574] transition-colors"
      >
        Submit
      </button>
    </div>
  );
};
