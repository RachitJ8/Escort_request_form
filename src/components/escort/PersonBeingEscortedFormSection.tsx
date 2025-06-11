import React, { useState } from "react";
import { FormInput } from "./FormInput";
import { FormSelect } from "./FormSelect";
import { DatePickerInput } from "./DatePickerInput";
import { PhoneInput } from "./PhoneInput";
import { FormFieldWrapper } from "./FormFieldWrapper";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { EscortRequestApprovalDialog } from "./EscortRequestApprovalDialog";
import { DenyListAlertDialog } from "./DenyListAlertDialog";
import { StopListAlertDialog } from "./StopListAlertDialog";
import { BadgedEmployeeAlertDialog } from "./BadgedEmployeeAlertDialog";
import { EscortPrivilegeAlertDialog } from "./EscortPrivilegeAlertDialog";

interface PersonData {
  personFirstName: string;
  personLastName: string;
  personDob: string;
  personPhone: string;
  personEmail: string;
  reasonForVisit: string;
  personCompany: string;
  typeOfId: string;
  idNumber: string;
  companyNotes: string;
}

interface PersonBeingEscortedFormSectionProps {
  formData: PersonData;
  onInputChange: (field: string, value: string) => void;
  personCollapsed: boolean;
  setPersonCollapsed: (collapsed: boolean) => void;
  showNewPersonForm: boolean;
  onAddPerson: () => void;
  onRemoveNewPerson: () => void;
  escortEIcon?: string;
}

export const PersonBeingEscortedFormSection: React.FC<PersonBeingEscortedFormSectionProps> = ({
  formData,
  onInputChange,
  personCollapsed,
  setPersonCollapsed,
  showNewPersonForm,
  onAddPerson,
  onRemoveNewPerson,
  escortEIcon = "Yes"
}) => {
  const [showApprovalDialog, setShowApprovalDialog] = useState(false);
  const [showDenyListDialog, setShowDenyListDialog] = useState(false);
  const [showStopListDialog, setShowStopListDialog] = useState(false);
  const [showBadgedEmployeeDialog, setShowBadgedEmployeeDialog] = useState(false);
  const [showEscortPrivilegeDialog, setShowEscortPrivilegeDialog] = useState(false);

  // Check if main section is completely filled
  const isMainSectionComplete = formData.personFirstName && 
    formData.personLastName && 
    formData.personDob && 
    formData.personPhone && 
    formData.personEmail && 
    formData.reasonForVisit && 
    formData.personCompany && 
    formData.typeOfId && 
    formData.idNumber;

  // Simulate checking different scenarios based on person name
  const requiresApproval = formData.personFirstName && formData.personLastName && 
    (formData.personFirstName.toLowerCase() === 'rachit' && formData.personLastName.toLowerCase() === 'jain');
  
  const isDenyList = formData.personFirstName && formData.personLastName && 
    (formData.personFirstName.toLowerCase() === 'deny' && formData.personLastName.toLowerCase() === 'person');
  
  const isStopList = formData.personFirstName && formData.personLastName && 
    (formData.personFirstName.toLowerCase() === 'stop' && formData.personLastName.toLowerCase() === 'person');
  
  const isBadgedEmployee = formData.personFirstName && formData.personLastName && 
    (formData.personFirstName.toLowerCase() === 'badge' && formData.personLastName.toLowerCase() === 'employee');

  const handleAddPerson = () => {
    if (escortEIcon === "No") {
      setShowEscortPrivilegeDialog(true);
      return;
    }

    if (isDenyList) {
      setShowDenyListDialog(true);
    } else if (isStopList) {
      setShowStopListDialog(true);
    } else if (isBadgedEmployee) {
      setShowBadgedEmployeeDialog(true);
    } else if (requiresApproval) {
      setShowApprovalDialog(true);
    } else {
      onAddPerson();
    }
  };

  const handleApprovalProceed = (reason: string) => {
    console.log("Escort reason:", reason);
    setShowApprovalDialog(false);
    onAddPerson();
  };

  return (
    <>
      {/* Person Being Escorted Information */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h2 className="text-[#663399] font-medium text-lg mb-2">Person Being Escorted Information</h2>
        <div className="text-sm text-gray-600 mb-4">
          <p>The person being escorted must have all of the following!</p>
          <ol className="list-decimal list-inside mt-2 space-y-1">
            <li>Valid Government Issued identification on them at all times.</li>
            <li>Understand the escort rules and regulations</li>
            <li>No Weapons or Contraband on them or in their possession</li>
          </ol>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <h3 className="text-[#663399] font-medium text-lg">Person Being Escorted</h3>
            {personCollapsed && (
              <button
                type="button"
                onClick={() => setPersonCollapsed(false)}
                className="text-[#663399]"
              >
                <ChevronDown size={20} />
              </button>
            )}
          </div>
          <button
            type="button"
            onClick={handleAddPerson}
            disabled={!isMainSectionComplete}
            className="bg-[#663399] text-white rounded-md px-3 py-1 text-sm font-medium hover:bg-[#4A2272] disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Add Person
          </button>
        </div>
        
        {personCollapsed ? (
          // Collapsed view showing only key information
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            <FormFieldWrapper label="Name">
              <div className="p-2 bg-gray-100 rounded-md text-sm">
                {formData.personFirstName} {formData.personLastName}
              </div>
            </FormFieldWrapper>
            
            <FormFieldWrapper label="Email">
              <div className="p-2 bg-gray-100 rounded-md text-sm">
                {formData.personEmail}
              </div>
            </FormFieldWrapper>
            
            <FormFieldWrapper label="ID Type">
              <div className="p-2 bg-gray-100 rounded-md text-sm">
                {formData.typeOfId}
              </div>
            </FormFieldWrapper>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            <FormFieldWrapper label="First Name" required>
              <FormInput 
                value={formData.personFirstName}
                onChange={(e) => onInputChange('personFirstName', e.target.value)}
                name="personFirstName" 
                placeholder="First Name" 
              />
            </FormFieldWrapper>
            
            <FormFieldWrapper label="Last Name" required>
              <FormInput 
                value={formData.personLastName}
                onChange={(e) => onInputChange('personLastName', e.target.value)}
                name="personLastName" 
                placeholder="Last Name" 
              />
            </FormFieldWrapper>
            
            <FormFieldWrapper label="Date of Birth" required>
              <DatePickerInput 
                value={formData.personDob}
                onChange={(value) => onInputChange('personDob', value)}
                name="personDob" 
                placeholder="MM/DD/YYYY" 
              />
            </FormFieldWrapper>
            
            <FormFieldWrapper label="Phone" required>
              <PhoneInput 
                value={formData.personPhone}
                onChange={(value) => onInputChange('personPhone', value)}
                name="personPhone" 
                placeholder="12324567890" 
              />
            </FormFieldWrapper>
            
            <FormFieldWrapper label="Email" required>
              <FormInput 
                value={formData.personEmail}
                onChange={(e) => onInputChange('personEmail', e.target.value)}
                name="personEmail" 
                placeholder="abc@mail.com" 
                type="email" 
              />
            </FormFieldWrapper>
            
            <FormFieldWrapper label="Reason for visit" required>
              <FormInput 
                value={formData.reasonForVisit}
                onChange={(e) => onInputChange('reasonForVisit', e.target.value)}
                name="reasonForVisit" 
                placeholder="" 
              />
            </FormFieldWrapper>
            
            <FormFieldWrapper label="Company" required>
              <FormSelect 
                value={formData.personCompany}
                onChange={(e) => onInputChange('personCompany', e.target.value)}
                options={[]} 
                placeholder="Select company"
              />
            </FormFieldWrapper>
            
            <FormFieldWrapper label="Type of ID" required>
              <FormSelect 
                value={formData.typeOfId}
                onChange={(e) => onInputChange('typeOfId', e.target.value)}
                options={[]} 
                placeholder="Select ID"
              />
            </FormFieldWrapper>
            
            <FormFieldWrapper label="ID #" required>
              <FormInput 
                value={formData.idNumber}
                onChange={(e) => onInputChange('idNumber', e.target.value)}
                name="idNumber" 
                placeholder="12312434532" 
              />
            </FormFieldWrapper>
            
            <div className="lg:col-span-3">
              <FormFieldWrapper label="Company notes">
                <textarea
                  value={formData.companyNotes}
                  onChange={(e) => onInputChange('companyNotes', e.target.value)}
                  name="companyNotes"
                  rows={3}
                  className="w-full p-2 bg-[#E6DFEC] border-0 rounded-md text-sm"
                  placeholder="Enter"
                ></textarea>
              </FormFieldWrapper>
            </div>
          </div>
        )}
      </div>

      {/* New Person Form */}
      {showNewPersonForm && (
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[#663399] font-medium text-lg">New Person Being Escorted</h2>
            <button
              type="button"
              onClick={onRemoveNewPerson}
              className="text-red-500 hover:text-red-700"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            <FormFieldWrapper label="First Name" required>
              <FormInput 
                name="newPersonFirstName" 
                placeholder="First Name"
                onChange={(e) => { /* TODO: implement handler with e.target.value */ }} 
              />
            </FormFieldWrapper>
            
            <FormFieldWrapper label="Last Name" required>
              <FormInput 
                name="newPersonLastName" 
                placeholder="Last Name"
                onChange={(e) => { /* TODO: implement handler with e.target.value */ }} 
              />
            </FormFieldWrapper>
            
            <FormFieldWrapper label="Date of Birth" required>
              <DatePickerInput 
                name="newPersonDob" 
                placeholder="MM/DD/YYYY"
                onChange={(value) => { /* TODO: implement handler */ }} 
              />
            </FormFieldWrapper>
            
            <FormFieldWrapper label="Phone" required>
              <PhoneInput 
                name="newPersonPhone" 
                placeholder="Phone Number"
                onChange={(value) => { /* TODO: implement handler */ }} 
              />
            </FormFieldWrapper>
            
            <FormFieldWrapper label="Email" required>
              <FormInput 
                name="newPersonEmail" 
                placeholder="Email" 
                type="email"
                onChange={(e) => { /* TODO: implement handler with e.target.value */ }} 
              />
            </FormFieldWrapper>
            
            <FormFieldWrapper label="Reason for visit" required>
              <FormInput 
                name="newReasonForVisit" 
                placeholder="Reason"
                onChange={(e) => { /* TODO: implement handler with e.target.value */ }} 
              />
            </FormFieldWrapper>
            
            <FormFieldWrapper label="Company" required>
              <FormSelect 
                options={[]} 
                placeholder="Select company"
                onChange={(e) => { /* TODO: implement handler with e.target.value */ }} 
              />
            </FormFieldWrapper>
            
            <FormFieldWrapper label="Type of ID" required>
              <FormSelect 
                options={[]} 
                placeholder="Select ID"
                onChange={(e) => { /* TODO: implement handler with e.target.value */ }} 
              />
            </FormFieldWrapper>
            
            <FormFieldWrapper label="ID #" required>
              <FormInput 
                name="newIdNumber" 
                placeholder="ID Number"
                onChange={(e) => { /* TODO: implement handler with e.target.value */ }} 
              />
            </FormFieldWrapper>
            
            <div className="lg:col-span-3">
              <FormFieldWrapper label="Company notes">
                <textarea
                  name="newCompanyNotes"
                  rows={3}
                  className="w-full p-2 bg-[#E6DFEC] border-0 rounded-md text-sm"
                  placeholder="Enter"
                  onChange={(e) => { /* TODO: implement handler with e.target.value */ }} 
                />
              </FormFieldWrapper>
            </div>
          </div>
        </div>
      )}

      {/* Alert Dialogs */}
      <EscortRequestApprovalDialog
        isOpen={showApprovalDialog}
        onClose={() => setShowApprovalDialog(false)}
        onProceed={handleApprovalProceed}
        personName={`${formData.personFirstName} ${formData.personLastName}`}
      />
      
      <DenyListAlertDialog
        isOpen={showDenyListDialog}
        onClose={() => setShowDenyListDialog(false)}
        personName={`${formData.personFirstName} ${formData.personLastName}`}
      />
      
      <StopListAlertDialog
        isOpen={showStopListDialog}
        onClose={() => setShowStopListDialog(false)}
        personName={`${formData.personFirstName} ${formData.personLastName}`}
      />
      
      <BadgedEmployeeAlertDialog
        isOpen={showBadgedEmployeeDialog}
        onClose={() => setShowBadgedEmployeeDialog(false)}
        personName={`${formData.personFirstName} ${formData.personLastName}`}
      />
      
      <EscortPrivilegeAlertDialog
        isOpen={showEscortPrivilegeDialog}
        onClose={() => setShowEscortPrivilegeDialog(false)}
      />
    </>
  );
};
