
import React from "react";
import { Check } from "lucide-react";

export const EscortSessionSuccessPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-4 flex items-center justify-center">
      <div className="max-w-[360px] w-full bg-white rounded-[20px] overflow-hidden shadow-md py-8 px-5 flex flex-col items-center">
        {/* Green badge with checkmark */}
        <div className="relative mb-6">
          <div className="w-16 h-16 bg-[#0C6B2E] rounded-full flex items-center justify-center relative">
            {/* Scalloped edges effect */}
            <div className="absolute inset-0 rounded-full bg-[#0C6B2E]" style={{
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
            }}>
            </div>
            <Check className="w-8 h-8 text-white relative z-10" strokeWidth={3} />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-black mb-4">Success</h1>
        
        <p className="text-center text-[#663399] mb-6 leading-relaxed">
          Escort session successfully closed.
        </p>
        
        <p className="text-center text-[#663399] mb-8 leading-relaxed">
          Thank you for completing the procedure.
        </p>
      </div>
    </div>
  );
};
