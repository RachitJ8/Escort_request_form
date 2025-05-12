
import React, { useState } from "react";
import { VehicleSection } from "./VehicleSection";
import { EscortInformationSection } from "./EscortInformationSection";
import { VehicleInformationSection } from "./VehicleInformationSection";
import { ProhibitedItemsSection } from "./ProhibitedItemsSection";
import { PersonBeingEscortedSection } from "./PersonBeingEscortedSection";
import { FormButtons } from "./FormButtons";

export const EscortRequestForm: React.FC = () => {
  const [personSections, setPersonSections] = useState<Array<{
    id: string;
    isCollapsed: boolean;
    data: {
      firstName: string;
      lastName: string;
      email: string;
      idType: string;
    };
  }>>([]);
  
  const addPersonSection = () => {
    // Collapse all existing sections
    const updatedSections = personSections.map(section => ({
      ...section,
      isCollapsed: true,
    }));
    
    // Add new section
    setPersonSections([
      ...updatedSections,
      {
        id: `person-${Date.now()}`,
        isCollapsed: false,
        data: { firstName: "", lastName: "", email: "", idType: "" },
      },
    ]);
  };
  
  const toggleCollapse = (id: string) => {
    setPersonSections(
      personSections.map(section => ({
        ...section,
        isCollapsed: section.id === id ? !section.isCollapsed : section.isCollapsed,
      }))
    );
  };
  
  const updatePersonData = (id: string, data: any) => {
    setPersonSections(
      personSections.map(section => ({
        ...section,
        data: section.id === id ? { ...section.data, ...data } : section.data,
      }))
    );
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
    // Handle form submission
  };

  return (
    <div className="max-w-md mx-auto bg-[#F5F2F7] rounded-[20px] overflow-hidden shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="bg-[#F4F0F9] py-4 px-6 text-center">
          <h1 className="text-[22px] font-bold text-[#333]">Escort Request Form</h1>
        </div>
        
        <div className="px-6 py-4">
          <VehicleSection />
          
          <EscortInformationSection />
          
          <VehicleInformationSection />
          
          <ProhibitedItemsSection />
          
          <PersonBeingEscortedSection 
            personSections={personSections}
            onAddPerson={addPersonSection}
            onToggleCollapse={toggleCollapse}
            onUpdateData={updatePersonData}
          />
          
          <div className="mt-8">
            <FormButtons />
          </div>
        </div>
      </form>
    </div>
  );
};
