
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const FormButtons: React.FC = () => {
  const navigate = useNavigate();
  
  const handleSubmit = () => {
    // Navigate to the success page after submission
    navigate("/success");
  };
  
  return (
    <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:gap-4 md:justify-between">
      <Button 
        variant="outline" 
        className="border-[#C12E24] bg-[#C12E24] text-white hover:bg-[#A61D13] hover:text-white"
      >
        Cancel
      </Button>
      <Button 
        type="submit"
        onClick={handleSubmit}
        className="bg-[#663399] hover:bg-[#4A2272] text-white"
      >
        Submit
      </Button>
    </div>
  );
};
