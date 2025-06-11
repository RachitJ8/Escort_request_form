
import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface EscortCloseoutConfirmDialogProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const EscortCloseoutConfirmDialog: React.FC<EscortCloseoutConfirmDialogProps> = ({
  isOpen,
  onConfirm,
  onCancel
}) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={onCancel}>
      <AlertDialogContent className="max-w-sm mx-auto bg-white rounded-lg shadow-lg p-0 overflow-hidden">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-black mb-4 text-center">
            Are you sure you want to close this escort session?
          </h2>
          
          <div className="flex gap-4">
            <Button
              onClick={onCancel}
              className="flex-1 bg-[#C12E24] hover:bg-[#A61D13] text-white rounded-md py-2 px-4 font-medium"
            >
              Cancel
            </Button>
            <Button
              onClick={onConfirm}
              className="flex-1 bg-[#228B22] hover:bg-[#1F7A1F] text-white rounded-md py-2 px-4 font-medium"
            >
              Confirm
            </Button>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};
