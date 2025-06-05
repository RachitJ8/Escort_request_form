import React from "react";
import { FormInput } from "./FormInput";
import { FormSelect } from "./FormSelect";
import { DatePickerInput } from "./DatePickerInput";
import { PhoneInput } from "./PhoneInput";
import { FormFieldWrapper } from "./FormFieldWrapper";
import { ChevronDown, ChevronUp, X } from "lucide-react";

interface EscortData {
  firstName: string;
  lastName: string;
  badgeNumber: string;
  dob: string;
  phone: string;
  email: string;
  company: string;
  eIcon: string;
  locationEscortedTo: string;
}

interface EscortInformationFormSectionProps {
  formData: EscortData;
  onInputChange: (field: string, value: string) => void;
  escortCollapsed: boolean;
  setEscortCollapsed: (collapsed: boolean) => void;
  showNewEscortForm: boolean;
  onAddEscort: () => void;
  onRemoveNewEscort: () => void;
}

export const EscortInformationFormSection: React.FC<EscortInformationFormSectionProps> = ({
  formData,
  onInputChange,
  escortCollapsed,
  setEscortCollapsed,
  showNewEscortForm,
  onAddEscort,
  onRemoveNewEscort
}) => {
  // Check if main section is completely filled
  const isMainSectionComplete = formData.firstName && 
    formData.lastName && 
    formData.badgeNumber && 
    formData.dob && 
    formData.phone && 
    formData.email && 
    formData.company && 
    formData.eIcon && 
    formData.locationEscortedTo;

  return (
    <>
      {/* Escort Information Section */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-[#663399] font-medium text-lg">Escort Information</h2>
            {escortCollapsed && (
              <button
                type="button"
                onClick={() => setEscortCollapsed(false)}
                className="text-[#663399]"
              >
                <ChevronDown size={20} />
              </button>
            )}
          </div>
          <button
            type="button"
            onClick={onAddEscort}
            disabled={!isMainSectionComplete}
            className="bg-[#663399] text-white rounded-md px-3 py-1 text-sm font-medium hover:bg-[#4A2272] disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Add Escort
          </button>
        </div>
        
        {escortCollapsed ? (
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            <FormFieldWrapper label="Name">
              <div className="p-2 bg-gray-100 rounded-md text-sm">
                {formData.firstName} {formData.lastName}
              </div>
            </FormFieldWrapper>
            
            <FormFieldWrapper label="Email">
              <div className="p-2 bg-gray-100 rounded-md text-sm">
                {formData.email}
              </div>
            </FormFieldWrapper>
            
            <FormFieldWrapper label="Badge Number">
              <div className="p-2 bg-gray-100 rounded-md text-sm">
                {formData.badgeNumber}
              </div>
            </FormFieldWrapper>
          </div>
        ) : (
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            <FormFieldWrapper label="First Name" required>
              <FormInput 
                value={formData.firstName}
                onChange={(e) => onInputChange('firstName', e.target.value)}
                name="firstName" 
                placeholder="Rachit" 
              />
            </FormFieldWrapper>
            
            <FormFieldWrapper label="Last Name" required>
              <FormInput 
                value={formData.lastName}
                onChange={(e) => onInputChange('lastName', e.target.value)}
                name="lastName" 
                placeholder="Jain" 
              />
            </FormFieldWrapper>
            
            <FormFieldWrapper label="Badge Number" required>
              <FormInput 
                value={formData.badgeNumber}
                onChange={(e) => onInputChange('badgeNumber', e.target.value)}
                name="badgeNumber" 
                placeholder="12346578" 
              />
            </FormFieldWrapper>
            
            <FormFieldWrapper label="Date of Birth" required>
              <DatePickerInput 
                value={formData.dob}
                onChange={(value) => onInputChange('dob', value)}
                name="dob" 
                placeholder="12/08/1997" 
              />
            </FormFieldWrapper>
            
            <FormFieldWrapper label="Phone" required>
              <PhoneInput 
                value={formData.phone}
                onChange={(value) => onInputChange('phone', value)}
                name="phone" 
                placeholder="7550169223" 
              />
            </FormFieldWrapper>
            
            <FormFieldWrapper label="Email" required>
              <FormInput 
                value={formData.email}
                onChange={(e) => onInputChange('email', e.target.value)}
                name="email" 
                placeholder="rjain@lawa.org" 
                type="email" 
              />
            </FormFieldWrapper>
            
            <FormFieldWrapper label="Company" required>
              <FormSelect 
                value={formData.company}
                onChange={(e) => onInputChange('company', e.target.value)}
                options={[{ value: "BSI", label: "BSI" }]} 
                placeholder="BSI"
              />
            </FormFieldWrapper>
            
            <FormFieldWrapper label='"E" icon' required>
              <FormSelect 
                value={formData.eIcon}
                onChange={(e) => onInputChange('eIcon', e.target.value)}
                options={[
                  { value: "Yes", label: "Yes" },
                  { value: "No", label: "No" }
                ]} 
                placeholder="Yes"
              />
            </FormFieldWrapper>
            
            <FormFieldWrapper label="Location escorted to" required>
              <FormInput 
                value={formData.locationEscortedTo}
                onChange={(e) => onInputChange('locationEscortedTo', e.target.value)}
                name="locationEscortedTo" 
                placeholder="Enter" 
              />
            </FormFieldWrapper>
          </div>
        )}
      </div>

      {/* New Escort Form */}
      {showNewEscortForm && (
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[#663399] font-medium text-lg">New Escort Information</h2>
            <button
              type="button"
              onClick={onRemoveNewEscort}
              className="text-red-500 hover:text-red-700"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            <FormFieldWrapper label="First Name" required>
              <FormInput 
                name="newFirstName" 
                placeholder="First Name"
                onChange={(e) => { /* TODO: implement handler with e.target.value */ }} 
              />
            </FormFieldWrapper>
            
            <FormFieldWrapper label="Last Name" required>
              <FormInput 
                name="newLastName" 
                placeholder="Last Name"
                onChange={(e) => { /* TODO: implement handler with e.target.value */ }} 
              />
            </FormFieldWrapper>
            
            <FormFieldWrapper label="Badge Number" required>
              <FormInput 
                name="newBadgeNumber" 
                placeholder="Badge Number"
                onChange={(e) => { /* TODO: implement handler with e.target.value */ }} 
              />
            </FormFieldWrapper>
            
            <FormFieldWrapper label="Date of Birth" required>
              <DatePickerInput 
                name="newDob" 
                placeholder="MM/DD/YYYY"
                onChange={(value) => { /* TODO: implement handler */ }} 
              />
            </FormFieldWrapper>
            
            <FormFieldWrapper label="Phone" required>
              <PhoneInput 
                name="newPhone" 
                placeholder="Phone Number"
                onChange={(value) => { /* TODO: implement handler */ }} 
              />
            </FormFieldWrapper>
            
            <FormFieldWrapper label="Email" required>
              <FormInput 
                name="newEmail" 
                placeholder="Email" 
                type="email"
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
            
            <FormFieldWrapper label='"E" icon' required>
              <FormSelect 
                options={[
                  { value: "Yes", label: "Yes" },
                  { value: "No", label: "No" }
                ]} 
                placeholder="Select"
                onChange={(e) => { /* TODO: implement handler with e.target.value */ }} 
              />
            </FormFieldWrapper>
            
            <FormFieldWrapper label="Location escorted to" required>
              <FormInput 
                name="newLocationEscortedTo" 
                placeholder="Enter"
                onChange={(e) => { /* TODO: implement handler with e.target.value */ }} 
              />
            </FormFieldWrapper>
          </div>
        </div>
      )}
    </>
  );
};
