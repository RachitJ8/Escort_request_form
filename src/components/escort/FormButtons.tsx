
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
    <div className="flex flex-col md:flex-row gap-4 justify-end">
      <Button 
        variant="outline" 
        className="border-[#663399] text-[#663399] hover:bg-[#F5F2F7]"
      >
        Save Draft
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
