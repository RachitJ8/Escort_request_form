
import React, { useState } from "react";
import { VehiclePostSection } from "./VehiclePostSection";
import { DriverInfoSection } from "./DriverInfoSection";
import { PersonBeingEscortedSection } from "./PersonBeingEscortedSection";
import { ProhibitedItemsSection } from "./ProhibitedItemsSection";
import { VehicleInfoSection } from "./VehicleInfoSection";
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
    <div className="max-w-md mx-auto bg-white rounded-[20px] overflow-hidden shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="bg-[#F4F0F9] py-4 px-6 text-center">
          <h1 className="text-[22px] font-bold text-[#333]">Escort Request Form</h1>
        </div>
        
        <div className="px-6 py-4 bg-[#E6DFEC]">
          <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
            <VehiclePostSection />
          </div>
          
          <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
            <DriverInfoSection />
          </div>
          
          <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
            <PersonBeingEscortedSection 
              personSections={personSections}
              onAddPerson={addPersonSection}
              onToggleCollapse={toggleCollapse}
              onUpdateData={updatePersonData}
            />
          </div>
          
          <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
            <ProhibitedItemsSection />
          </div>
          
          <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
            <VehicleInfoSection />
          </div>
          
          <div className="mt-8">
            <FormButtons />
          </div>
        </div>
      </form>
    </div>
  );
};
