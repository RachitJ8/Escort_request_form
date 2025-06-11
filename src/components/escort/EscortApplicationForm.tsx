
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { EscortInformationFormSection } from "./EscortInformationFormSection";
import { PersonBeingEscortedFormSection } from "./PersonBeingEscortedFormSection";

export const EscortApplicationForm: React.FC = () => {
  const navigate = useNavigate();
  
  const [escortCollapsed, setEscortCollapsed] = useState(false);
  const [personCollapsed, setPersonCollapsed] = useState(false);
  const [showNewEscortForm, setShowNewEscortForm] = useState(false);
  const [showNewPersonForm, setShowNewPersonForm] = useState(false);
  
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

  const handleAddEscort = () => {
    setEscortCollapsed(true);
    setShowNewEscortForm(true);
  };

  const handleAddPerson = () => {
    setPersonCollapsed(true);
    setShowNewPersonForm(true);
  };

  const handleRemoveNewEscort = () => {
    setShowNewEscortForm(false);
  };

  const handleRemoveNewPerson = () => {
    setShowNewPersonForm(false);
  };

  return (
    <div className="max-w-md mx-auto bg-[#F5F2F7] rounded-[20px] overflow-hidden shadow-md md:max-w-full">
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <div className="bg-[#F4F0F9] py-4 px-6 text-center">
          <h1 className="text-[22px] font-bold text-[#333]">Escort Application</h1>
        </div>
        
        <div className="px-6 py-4">
          <div className="space-y-6">
            <EscortInformationFormSection
              formData={formData}
              onInputChange={handleInputChange}
              escortCollapsed={escortCollapsed}
              setEscortCollapsed={setEscortCollapsed}
              showNewEscortForm={showNewEscortForm}
              onAddEscort={handleAddEscort}
              onRemoveNewEscort={handleRemoveNewEscort}
            />

            <PersonBeingEscortedFormSection
              formData={formData}
              onInputChange={handleInputChange}
              personCollapsed={personCollapsed}
              setPersonCollapsed={setPersonCollapsed}
              showNewPersonForm={showNewPersonForm}
              onAddPerson={handleAddPerson}
              onRemoveNewPerson={handleRemoveNewPerson}
              escortEIcon={formData.eIcon}
            />
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
