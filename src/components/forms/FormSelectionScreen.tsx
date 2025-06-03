
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const FormSelectionScreen: React.FC = () => {
  const navigate = useNavigate();

  const handlePreRegistration = () => {
    navigate("/");
  };

  const handleEscortApplication = () => {
    navigate("/escort-application");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-32 h-32 bg-[#663399] rounded-full flex items-center justify-center">
            <svg 
              viewBox="0 0 200 100" 
              className="w-24 h-12 text-white"
              fill="currentColor"
            >
              {/* Person with luggage */}
              <g>
                {/* Person head */}
                <circle cx="45" cy="25" r="8" />
                {/* Person body */}
                <rect x="40" y="33" width="10" height="20" />
                {/* Person legs */}
                <rect x="42" y="53" width="3" height="15" />
                <rect x="47" y="53" width="3" height="15" />
                {/* Person arms */}
                <rect x="35" y="38" width="8" height="3" />
                <rect x="47" y="38" width="8" height="3" />
                {/* Luggage */}
                <rect x="55" y="45" width="12" height="18" rx="2" />
                <rect x="58" y="40" width="6" height="5" rx="1" />
                {/* Luggage handle */}
                <line x1="61" y1="63" x2="75" y2="63" stroke="currentColor" strokeWidth="2" />
                {/* Ground line */}
                <line x1="20" y1="70" x2="90" y2="70" stroke="currentColor" strokeWidth="2" />
              </g>
              
              {/* Airplane */}
              <g transform="translate(110, 10)">
                <path d="M0,20 L15,15 L40,12 L50,8 L65,5 L70,8 L65,15 L50,18 L40,22 L15,25 L0,20 Z" />
                <path d="M20,12 L35,5 L45,8 L35,15 L20,12 Z" />
                <path d="M25,25 L35,20 L45,23 L35,28 L25,25 Z" />
              </g>
            </svg>
          </div>
        </div>

        {/* Form Selection Buttons */}
        <div className="space-y-4">
          <Button
            onClick={handlePreRegistration}
            className="w-full py-6 text-lg font-medium bg-[#E6DFEC] text-[#663399] hover:bg-[#D6CFDC] border-0 rounded-lg"
            variant="outline"
          >
            Pre registration form
          </Button>
          
          <Button
            onClick={handleEscortApplication}
            className="w-full py-6 text-lg font-medium bg-[#E6DFEC] text-[#663399] hover:bg-[#D6CFDC] border-0 rounded-lg"
            variant="outline"
          >
            Escort Application
          </Button>
        </div>
      </div>
    </div>
  );
};
