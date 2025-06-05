
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

interface EscortRequestApprovalDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onProceed: (reason: string) => void;
  personName: string;
}

export const EscortRequestApprovalDialog: React.FC<EscortRequestApprovalDialogProps> = ({
  isOpen,
  onClose,
  onProceed,
  personName
}) => {
  const [escortReason, setEscortReason] = useState("");

  const handleProceed = () => {
    if (escortReason.trim()) {
      onProceed(escortReason);
      setEscortReason("");
    }
  };

  const handleCancel = () => {
    setEscortReason("");
    onClose();
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-0 overflow-hidden">
        <div className="p-6 pb-4">
          <AlertDialogHeader className="text-center space-y-4">
            <AlertDialogTitle className="text-lg font-semibold text-[#FF6B6B] leading-tight">
              Escort Request Requires Approval
            </AlertDialogTitle>
            
            <div className="flex justify-center">
              <div className="bg-[#FFD700] rounded-full p-3">
                <AlertTriangle className="w-8 h-8 text-black" fill="black" />
              </div>
            </div>
            
            <AlertDialogDescription className="text-sm text-gray-700 leading-relaxed space-y-4">
              <p>
                <strong>The individual you are attempting to escort has already been escorted more than 3 times in the past 90 days.</strong>
              </p>
              
              <p>
                As per protocol, any further escort requests for this individual require prior approval.
              </p>
              
              <ul className="text-left space-y-2 list-disc list-inside">
                <li>Your request will be sent for approval upon submission.</li>
                <li>You will be notified once it is approved or rejected.</li>
              </ul>
              
              <p className="font-medium">
                Please provide a valid reason for the escort below.
              </p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          
          <div className="mt-6 space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              Escort Reason:
            </label>
            <textarea
              value={escortReason}
              onChange={(e) => setEscortReason(e.target.value)}
              className="w-full h-20 p-3 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="Enter reason for escort..."
            />
          </div>
        </div>
        
        <div className="flex gap-4 p-6 pt-2">
          <Button
            onClick={handleCancel}
            className="flex-1 bg-[#C12E24] hover:bg-[#A61D13] text-white rounded-md py-2 px-4 font-medium"
          >
            Cancel
          </Button>
          <Button
            onClick={handleProceed}
            disabled={!escortReason.trim()}
            className="flex-1 bg-[#228B22] hover:bg-[#1F7A1F] text-white rounded-md py-2 px-4 font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Proceed
          </Button>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};
