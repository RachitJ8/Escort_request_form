
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { EscortCloseoutConfirmDialog } from "./EscortCloseoutConfirmDialog";
import { EscortSessionSuccessPage } from "./EscortSessionSuccessPage";

export const EscortTicketCloseout: React.FC = () => {
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showSuccessPage, setShowSuccessPage] = useState(false);
  const [escortedPartyLeft, setEscortedPartyLeft] = useState(false);

  const handleCompleteSession = () => {
    setShowConfirmDialog(true);
  };

  const handleConfirm = () => {
    setShowConfirmDialog(false);
    setShowSuccessPage(true);
  };

  const handleCancel = () => {
    setShowConfirmDialog(false);
  };

  if (showSuccessPage) {
    return <EscortSessionSuccessPage />;
  }

  return (
    <>
      <div className="min-h-screen bg-white p-4 flex items-center justify-center">
        <div className="max-w-[360px] w-full bg-white rounded-[20px] overflow-hidden shadow-md py-8 px-5 flex flex-col items-center">
          {/* Green checkmark icon */}
          <div className="w-16 h-16 bg-[#0C6B2E] rounded-full flex items-center justify-center mb-6">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <svg className="w-6 h-6 text-[#0C6B2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-black mb-8">Escort Ticket Closeout</h1>
          
          <div className="w-full space-y-3 mb-6">
            <div className="flex justify-between">
              <span className="text-[#663399] font-medium">Escort Name:</span>
              <span className="text-gray-700">Rachit Jain</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-[#663399] font-medium">Escort ID:</span>
              <span className="text-gray-700">#1234567</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-[#663399] font-medium">Checkpoint Post:</span>
              <span className="text-gray-700">Gate A</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-[#663399] font-medium">Scheduled ETA:</span>
              <span className="text-gray-700">06:30 AM</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-[#663399] font-medium">Date:</span>
              <span className="text-gray-700">19 May 2025</span>
            </div>
          </div>
          
          <p className="text-center text-[#663399] mb-6 text-sm leading-relaxed">
            Note: Closing the Escort Ticket and Escort Handoff are the responsibilities of the Escort.
          </p>
          
          <div className="flex items-center gap-3 mb-8">
            <Checkbox 
              id="escorted-party-left"
              checked={escortedPartyLeft}
              onCheckedChange={(checked) => setEscortedPartyLeft(checked === true)}
              className="data-[state=checked]:bg-[#663399] data-[state=checked]:border-[#663399]"
            />
            <label 
              htmlFor="escorted-party-left" 
              className="text-sm text-gray-700 cursor-pointer"
            >
              Escorted party has left the airfield
            </label>
          </div>
          
          <Button 
            onClick={handleCompleteSession}
            disabled={!escortedPartyLeft}
            className="w-full py-3 bg-[#663399] text-white rounded-md hover:bg-[#4A2272] transition-colors font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Complete Session
          </Button>
        </div>
      </div>

      <EscortCloseoutConfirmDialog 
        isOpen={showConfirmDialog}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </>
  );
};
