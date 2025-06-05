
import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { AlertTriangle, X } from "lucide-react";

interface StopListAlertDialogProps {
  isOpen: boolean;
  onClose: () => void;
  personName: string;
}

export const StopListAlertDialog: React.FC<StopListAlertDialogProps> = ({
  isOpen,
  onClose,
  personName
}) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-0 overflow-hidden">
        <div className="p-6">
          <AlertDialogHeader className="text-center space-y-4">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <AlertDialogTitle className="text-lg font-semibold text-[#FF6B6B] leading-tight">
                  Stop List
                </AlertDialogTitle>
              </div>
              <button
                onClick={onClose}
                className="text-[#FF6B6B] hover:text-[#FF5252] ml-2"
              >
                <X size={16} />
              </button>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-[#FFD700] rounded-full p-3">
                <AlertTriangle className="w-8 h-8 text-black" fill="black" />
              </div>
            </div>
            
            <AlertDialogDescription className="text-sm text-gray-700 leading-relaxed space-y-4">
              <p className="font-semibold">
                The provided details are associated with an individual on the Stop List.
              </p>
              
              <p>
                Kindly add the details of other individuals instead.
              </p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          
          <div className="mt-6 flex justify-center">
            <Button
              onClick={onClose}
              className="bg-[#663399] hover:bg-[#4A2272] text-white rounded-md py-2 px-8 font-medium"
            >
              OK
            </Button>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};
