
import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface EscortPrivilegeAlertDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EscortPrivilegeAlertDialog: React.FC<EscortPrivilegeAlertDialogProps> = ({
  isOpen,
  onClose
}) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="max-w-sm mx-auto bg-white rounded-lg shadow-lg p-0 overflow-hidden">
        <div className="p-6">
          <AlertDialogHeader className="text-center space-y-4">
            <AlertDialogTitle className="text-lg font-semibold text-[#663399] leading-tight">
              Escort Request Form
            </AlertDialogTitle>
            
            <AlertDialogDescription className="text-sm text-[#663399] leading-relaxed space-y-4">
              <p className="font-semibold">
                Your badge does not have escort privilege, please contact your Authorized Signer for more information.
              </p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          
          <div className="mt-6 flex justify-center">
            <Button
              onClick={onClose}
              className="bg-[#663399] hover:bg-[#4A2272] text-white rounded-md py-2 px-8 font-medium"
            >
              Okay
            </Button>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};
