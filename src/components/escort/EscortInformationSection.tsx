
import React from "react";
import { FormInput } from "./FormInput";
import { FormSelect } from "./FormSelect";
import { DatePickerInput } from "./DatePickerInput";
import { PhoneInput } from "./PhoneInput";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useIsMobile } from "@/hooks/use-mobile";

interface EscortSectionProps {
  escortSections: Array<{
    id: string;
    isCollapsed: boolean;
    isComplete: boolean;
    data: {
      firstName: string;
      lastName: string;
      badgeNumber: string;
      dob: string;
      phone: string;
      email: string;
      company: string;
      eIcon: string;
      dIcon: string;
    };
  }>;
  onAddEscort: () => void;
  onToggleCollapse: (id: string) => void;
  onUpdateData: (id: string, data: any) => void;
  addButtonDisabled: boolean;
}

export const EscortInformationSection: React.FC<EscortSectionProps> = ({
  escortSections,
  onAddEscort,
  onToggleCollapse,
  onUpdateData,
  addButtonDisabled
}) => {
  const isMobile = useIsMobile();

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#663399] font-medium text-lg">Escort Information</h2>
        <button
          type="button"
          onClick={onAddEscort}
          disabled={addButtonDisabled}
          className={`bg-[#663399] text-white rounded-md px-3 py-1 text-sm font-medium ${
            addButtonDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#4A2272]'
          }`}
        >
          Add Escort/Driver
        </button>
      </div>
      
      {escortSections.map((escort, index) => (
        <div 
          key={escort.id} 
          className={`mb-4 ${index > 0 ? "border border-[#E6DFEC] rounded-md p-3" : ""}`}
        >
          {index > 0 && (
            <Collapsible open={!escort.isCollapsed} onOpenChange={() => onToggleCollapse(escort.id)}>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">
                    {escort.data.firstName} {escort.data.lastName}
                    {escort.data.badgeNumber && ` • Badge: ${escort.data.badgeNumber}`}
                  </p>
                </div>
                <CollapsibleTrigger asChild>
                  <button type="button" className="text-[#663399]">
                    {escort.isCollapsed ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
                  </button>
                </CollapsibleTrigger>
              </div>
              
              <CollapsibleContent>
                <div className="mt-3">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                    <EscortFormField
                      label="First Name"
                      required
                      isMobile={isMobile}
                    >
                      <FormInput 
                        value={escort.data.firstName}
                        onChange={(e) => onUpdateData(escort.id, { firstName: e.target.value })}
                        name={`${escort.id}-firstName`} 
                        placeholder="First Name" 
                      />
                    </EscortFormField>
                    
                    <EscortFormField
                      label="Last Name"
                      required
                      isMobile={isMobile}
                    >
                      <FormInput 
                        value={escort.data.lastName}
                        onChange={(e) => onUpdateData(escort.id, { lastName: e.target.value })} 
                        name={`${escort.id}-lastName`} 
                        placeholder="Last Name" 
                      />
                    </EscortFormField>
                    
                    <EscortFormField
                      label="Badge Number"
                      required
                      isMobile={isMobile}
                    >
                      <FormInput 
                        value={escort.data.badgeNumber}
                        onChange={(e) => onUpdateData(escort.id, { badgeNumber: e.target.value })} 
                        name={`${escort.id}-badgeNumber`} 
                        placeholder="Badge Number" 
                      />
                    </EscortFormField>
                    
                    <EscortFormField
                      label="Date of Birth"
                      required
                      isMobile={isMobile}
                    >
                      <DatePickerInput 
                        value={escort.data.dob}
                        onChange={(value) => onUpdateData(escort.id, { dob: value })}
                        name={`${escort.id}-dob`} 
                        placeholder="MM/DD/YYYY" 
                      />
                    </EscortFormField>
                    
                    <EscortFormField
                      label="Phone"
                      required
                      isMobile={isMobile}
                    >
                      <PhoneInput 
                        value={escort.data.phone}
                        onChange={(value) => onUpdateData(escort.id, { phone: value })}
                        name={`${escort.id}-phone`} 
                        placeholder="1234567890" 
                      />
                    </EscortFormField>
                    
                    <EscortFormField
                      label="Email"
                      required
                      isMobile={isMobile}
                    >
                      <FormInput 
                        value={escort.data.email}
                        onChange={(e) => onUpdateData(escort.id, { email: e.target.value })}
                        name={`${escort.id}-email`} 
                        placeholder="abc@mail.com" 
                        type="email" 
                      />
                    </EscortFormField>
                    
                    <EscortFormField
                      label="Company"
                      required
                      isMobile={isMobile}
                    >
                      <FormSelect 
                        value={escort.data.company}
                        onChange={(e) => onUpdateData(escort.id, { company: e.target.value })}
                        options={[{ value: "bsi", label: "BSI" }]} 
                        placeholder="Select company"
                      />
                    </EscortFormField>
                    
                    <EscortFormField
                      label='"E" Icon'
                      required
                      isMobile={isMobile}
                    >
                      <FormSelect 
                        value={escort.data.eIcon}
                        onChange={(e) => onUpdateData(escort.id, { eIcon: e.target.value })}
                        options={[
                          { value: "yes", label: "Yes" },
                          { value: "no", label: "No" }
                        ]} 
                        placeholder="Select"
                      />
                    </EscortFormField>
                    
                    <EscortFormField
                      label='"D" Icon'
                      required
                      isMobile={isMobile}
                    >
                      <FormSelect 
                        value={escort.data.dIcon}
                        onChange={(e) => onUpdateData(escort.id, { dIcon: e.target.value })}
                        options={[
                          { value: "yes", label: "Yes" },
                          { value: "no", label: "No" }
                        ]} 
                        placeholder="Select"
                      />
                    </EscortFormField>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          )}
          
          {(index === 0 || !escort.isCollapsed) && index === 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              <EscortFormField
                label="First Name"
                required
                isMobile={isMobile}
              >
                <FormInput 
                  value={escort.data.firstName}
                  onChange={(e) => onUpdateData(escort.id, { firstName: e.target.value })}
                  name={`${escort.id}-firstName`} 
                  placeholder="First Name" 
                />
              </EscortFormField>
              
              <EscortFormField
                label="Last Name"
                required
                isMobile={isMobile}
              >
                <FormInput 
                  value={escort.data.lastName}
                  onChange={(e) => onUpdateData(escort.id, { lastName: e.target.value })} 
                  name={`${escort.id}-lastName`} 
                  placeholder="Last Name" 
                />
              </EscortFormField>
              
              <EscortFormField
                label="Badge Number"
                required
                isMobile={isMobile}
              >
                <FormInput 
                  value={escort.data.badgeNumber}
                  onChange={(e) => onUpdateData(escort.id, { badgeNumber: e.target.value })} 
                  name={`${escort.id}-badgeNumber`} 
                  placeholder="Badge Number" 
                />
              </EscortFormField>
              
              <EscortFormField
                label="Date of Birth"
                required
                isMobile={isMobile}
              >
                <DatePickerInput 
                  value={escort.data.dob}
                  onChange={(value) => onUpdateData(escort.id, { dob: value })}
                  name={`${escort.id}-dob`} 
                  placeholder="MM/DD/YYYY" 
                />
              </EscortFormField>
              
              <EscortFormField
                label="Phone"
                required
                isMobile={isMobile}
              >
                <PhoneInput 
                  value={escort.data.phone}
                  onChange={(value) => onUpdateData(escort.id, { phone: value })}
                  name={`${escort.id}-phone`} 
                  placeholder="1234567890" 
                />
              </EscortFormField>
              
              <EscortFormField
                label="Email"
                required
                isMobile={isMobile}
              >
                <FormInput 
                  value={escort.data.email}
                  onChange={(e) => onUpdateData(escort.id, { email: e.target.value })}
                  name={`${escort.id}-email`} 
                  placeholder="abc@mail.com" 
                  type="email" 
                />
              </EscortFormField>
              
              <EscortFormField
                label="Company"
                required
                isMobile={isMobile}
              >
                <FormSelect 
                  value={escort.data.company}
                  onChange={(e) => onUpdateData(escort.id, { company: e.target.value })}
                  options={[{ value: "bsi", label: "BSI" }]} 
                  placeholder="Select company"
                />
              </EscortFormField>
              
              <EscortFormField
                label='"E" Icon'
                required
                isMobile={isMobile}
              >
                <FormSelect 
                  value={escort.data.eIcon}
                  onChange={(e) => onUpdateData(escort.id, { eIcon: e.target.value })}
                  options={[
                    { value: "yes", label: "Yes" },
                    { value: "no", label: "No" }
                  ]} 
                  placeholder="Select"
                />
              </EscortFormField>
              
              <EscortFormField
                label='"D" Icon'
                required
                isMobile={isMobile}
              >
                <FormSelect 
                  value={escort.data.dIcon}
                  onChange={(e) => onUpdateData(escort.id, { dIcon: e.target.value })}
                  options={[
                    { value: "yes", label: "Yes" },
                    { value: "no", label: "No" }
                  ]} 
                  placeholder="Select"
                />
              </EscortFormField>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

interface EscortFormFieldProps {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  isMobile?: boolean;
}

const EscortFormField: React.FC<EscortFormFieldProps> = ({
  label,
  required = false,
  children,
  isMobile = false
}) => {
  return isMobile ? (
    <div className="flex items-center mb-3">
      <div className="w-1/2">
        <label className="block text-[#663399] text-sm">
          {label}{required && <span className="text-red-500">*</span>}
        </label>
      </div>
      <div className="w-1/2">
        {children}
      </div>
    </div>
  ) : (
    <div className="mb-3">
      <label className="block text-[#663399] text-sm mb-1">
        {label}{required && <span className="text-red-500">*</span>}
      </label>
      <div>
        {children}
      </div>
    </div>
  );
};
