
import React, { useState } from "react";
import { FormInput } from "./FormInput";
import { FormSelect } from "./FormSelect";
import { DatePickerInput } from "./DatePickerInput";
import { PhoneInput } from "./PhoneInput";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

export const EscortApplicationForm: React.FC = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  const [formData, setFormData] = useState({
    firstName: "Rachit",
    lastName: "Jain",
    badgeNumber: "12346578",
    dob: "12/08/1997",
    phone: "7550169223",
    email: "rjain@lawa.org",
    company: "BSI",
    eIcon: "Yes",
    locationEscortedTo: "",
    personFirstName: "",
    personLastName: "",
    personDob: "",
    personPhone: "12324567890",
    personEmail: "abc@mail.com",
    reasonForVisit: "",
    personCompany: "",
    typeOfId: "",
    idNumber: "12312434532",
    companyNotes: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCancel = () => {
    navigate("/form-select");
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    navigate("/success");
  };

  const FormField: React.FC<{
    label: string;
    required?: boolean;
    children: React.ReactNode;
  }> = ({ label, required = false, children }) => {
    return isMobile ? (
      <div className="flex items-center mb-3">
        <div className="w-1/2">
          <label className="block text-[#663399] text-sm font-medium">
            {label}{required && <span className="text-red-500">*</span>}
          </label>
        </div>
        <div className="w-1/2">
          {children}
        </div>
      </div>
    ) : (
      <div className="mb-3">
        <label className="block text-[#663399] text-sm font-medium mb-1">
          {label}{required && <span className="text-red-500">*</span>}
        </label>
        <div>
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-md mx-auto bg-[#F5F2F7] rounded-[20px] overflow-hidden shadow-md md:max-w-full">
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <div className="bg-[#F4F0F9] py-4 px-6 text-center">
          <h1 className="text-[22px] font-bold text-[#333]">Escort Application</h1>
        </div>
        
        <div className="px-6 py-4">
          <div className="space-y-6">
            {/* Escort Information Section */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-[#663399] font-medium text-lg">Escort Information</h2>
                <button
                  type="button"
                  className="bg-[#663399] text-white rounded-md px-3 py-1 text-sm font-medium hover:bg-[#4A2272]"
                >
                  Add Escort
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                <FormField label="First Name" required>
                  <FormInput 
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    name="firstName" 
                    placeholder="Rachit" 
                  />
                </FormField>
                
                <FormField label="Last Name" required>
                  <FormInput 
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    name="lastName" 
                    placeholder="Jain" 
                  />
                </FormField>
                
                <FormField label="Badge Number" required>
                  <FormInput 
                    value={formData.badgeNumber}
                    onChange={(e) => handleInputChange('badgeNumber', e.target.value)}
                    name="badgeNumber" 
                    placeholder="12346578" 
                  />
                </FormField>
                
                <FormField label="Date of Birth" required>
                  <DatePickerInput 
                    value={formData.dob}
                    onChange={(value) => handleInputChange('dob', value)}
                    name="dob" 
                    placeholder="12/08/1997" 
                  />
                </FormField>
                
                <FormField label="Phone" required>
                  <PhoneInput 
                    value={formData.phone}
                    onChange={(value) => handleInputChange('phone', value)}
                    name="phone" 
                    placeholder="7550169223" 
                  />
                </FormField>
                
                <FormField label="Email" required>
                  <FormInput 
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    name="email" 
                    placeholder="rjain@lawa.org" 
                    type="email" 
                  />
                </FormField>
                
                <FormField label="Company" required>
                  <FormSelect 
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    options={[{ value: "BSI", label: "BSI" }]} 
                    placeholder="BSI"
                  />
                </FormField>
                
                <FormField label='"E" icon' required>
                  <FormSelect 
                    value={formData.eIcon}
                    onChange={(e) => handleInputChange('eIcon', e.target.value)}
                    options={[
                      { value: "Yes", label: "Yes" },
                      { value: "No", label: "No" }
                    ]} 
                    placeholder="Yes"
                  />
                </FormField>
                
                <FormField label="Location escorted to" required>
                  <FormInput 
                    value={formData.locationEscortedTo}
                    onChange={(e) => handleInputChange('locationEscortedTo', e.target.value)}
                    name="locationEscortedTo" 
                    placeholder="Enter" 
                  />
                </FormField>
              </div>
            </div>

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
                <h3 className="text-[#663399] font-medium text-lg">Person Being Escorted</h3>
                <button
                  type="button"
                  className="bg-[#663399] text-white rounded-md px-3 py-1 text-sm font-medium hover:bg-[#4A2272]"
                >
                  Add Person
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                <FormField label="First Name" required>
                  <FormInput 
                    value={formData.personFirstName}
                    onChange={(e) => handleInputChange('personFirstName', e.target.value)}
                    name="personFirstName" 
                    placeholder="First Name" 
                  />
                </FormField>
                
                <FormField label="Last Name" required>
                  <FormInput 
                    value={formData.personLastName}
                    onChange={(e) => handleInputChange('personLastName', e.target.value)}
                    name="personLastName" 
                    placeholder="Last Name" 
                  />
                </FormField>
                
                <FormField label="Date of Birth" required>
                  <DatePickerInput 
                    value={formData.personDob}
                    onChange={(value) => handleInputChange('personDob', value)}
                    name="personDob" 
                    placeholder="MM/DD/YYYY" 
                  />
                </FormField>
                
                <FormField label="Phone" required>
                  <PhoneInput 
                    value={formData.personPhone}
                    onChange={(value) => handleInputChange('personPhone', value)}
                    name="personPhone" 
                    placeholder="12324567890" 
                  />
                </FormField>
                
                <FormField label="Email" required>
                  <FormInput 
                    value={formData.personEmail}
                    onChange={(e) => handleInputChange('personEmail', e.target.value)}
                    name="personEmail" 
                    placeholder="abc@mail.com" 
                    type="email" 
                  />
                </FormField>
                
                <FormField label="Reason for visit" required>
                  <FormInput 
                    value={formData.reasonForVisit}
                    onChange={(e) => handleInputChange('reasonForVisit', e.target.value)}
                    name="reasonForVisit" 
                    placeholder="" 
                  />
                </FormField>
                
                <FormField label="Company" required>
                  <FormSelect 
                    value={formData.personCompany}
                    onChange={(e) => handleInputChange('personCompany', e.target.value)}
                    options={[]} 
                    placeholder="Select company"
                  />
                </FormField>
                
                <FormField label="Type of ID" required>
                  <FormSelect 
                    value={formData.typeOfId}
                    onChange={(e) => handleInputChange('typeOfId', e.target.value)}
                    options={[]} 
                    placeholder="Select ID"
                  />
                </FormField>
                
                <FormField label="ID #" required>
                  <FormInput 
                    value={formData.idNumber}
                    onChange={(e) => handleInputChange('idNumber', e.target.value)}
                    name="idNumber" 
                    placeholder="12312434532" 
                  />
                </FormField>
                
                <div className="lg:col-span-3">
                  <FormField label="Company notes">
                    <textarea
                      value={formData.companyNotes}
                      onChange={(e) => handleInputChange('companyNotes', e.target.value)}
                      name="companyNotes"
                      rows={3}
                      className="w-full p-2 bg-[#E6DFEC] border-0 rounded-md text-sm"
                      placeholder="Enter"
                    ></textarea>
                  </FormField>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:gap-4 md:justify-between">
              <Button 
                type="button"
                onClick={handleCancel}
                variant="outline" 
                className="border-[#C12E24] bg-[#C12E24] text-white hover:bg-[#A61D13] hover:text-white"
              >
                Cancel
              </Button>
              <Button 
                type="submit"
                className="bg-[#663399] hover:bg-[#4A2272] text-white"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
