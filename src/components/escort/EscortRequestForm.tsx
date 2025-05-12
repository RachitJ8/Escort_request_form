
import React, { useState } from "react";
import { VehicleSection } from "./VehicleSection";
import { EscortInformationSection } from "./EscortInformationSection";
import { VehicleInformationSection } from "./VehicleInformationSection";
import { ProhibitedItemsSection } from "./ProhibitedItemsSection";
import { PersonBeingEscortedSection } from "./PersonBeingEscortedSection";
import { FormButtons } from "./FormButtons";
import { useIsMobile } from "@/hooks/use-mobile";

export const EscortRequestForm: React.FC = () => {
  const isMobile = useIsMobile();
  
  // State for escort sections
  const [escortSections, setEscortSections] = useState<Array<{
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
  }>>([{
    id: `escort-${Date.now()}`,
    isCollapsed: false,
    isComplete: true, // Default section is complete with prefilled data
    data: { 
      firstName: "Rachit", 
      lastName: "Jain", 
      badgeNumber: "12345678", 
      dob: "12/08/1997", 
      phone: "7550169223", 
      email: "rjain@lawa.org", 
      company: "bsi", 
      eIcon: "yes", 
      dIcon: "yes" 
    },
  }]);
  
  // State for vehicle sections
  const [vehicleSections, setVehicleSections] = useState<Array<{
    id: string;
    isCollapsed: boolean;
    isComplete: boolean;
    data: {
      vehicleLicense: string;
      state: string;
      vehicleColor: string;
      vehicleDriver: string;
      reasonForEscort: string;
      authByOps: string;
      licenseImage?: File;
    };
  }>>([{
    id: `vehicle-${Date.now()}`,
    isCollapsed: false,
    isComplete: false,
    data: { 
      vehicleLicense: "", 
      state: "", 
      vehicleColor: "", 
      vehicleDriver: "", 
      reasonForEscort: "", 
      authByOps: "no",
      licenseImage: undefined
    },
  }]);

  // State for person sections
  const [personSections, setPersonSections] = useState<Array<{
    id: string;
    isCollapsed: boolean;
    isComplete: boolean;
    data: {
      firstName: string;
      lastName: string;
      email: string;
      idType: string;
    };
  }>>([]);
  
  // Add new escort section
  const addEscortSection = () => {
    // Collapse all existing sections
    const updatedSections = escortSections.map(section => ({
      ...section,
      isCollapsed: true,
    }));
    
    // Add new section
    setEscortSections([
      ...updatedSections,
      {
        id: `escort-${Date.now()}`,
        isCollapsed: false,
        isComplete: false,
        data: { 
          firstName: "", 
          lastName: "", 
          badgeNumber: "", 
          dob: "", 
          phone: "", 
          email: "", 
          company: "", 
          eIcon: "", 
          dIcon: "" 
        },
      },
    ]);
  };
  
  // Add new vehicle section
  const addVehicleSection = () => {
    // Collapse all existing sections
    const updatedSections = vehicleSections.map(section => ({
      ...section,
      isCollapsed: true,
    }));
    
    // Add new section
    setVehicleSections([
      ...updatedSections,
      {
        id: `vehicle-${Date.now()}`,
        isCollapsed: false,
        isComplete: false,
        data: { 
          vehicleLicense: "", 
          state: "", 
          vehicleColor: "", 
          vehicleDriver: "", 
          reasonForEscort: "", 
          authByOps: "no",
          licenseImage: undefined
        },
      },
    ]);
  };
  
  // Add new person section
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
        isComplete: false,
        data: { firstName: "", lastName: "", email: "", idType: "" },
      },
    ]);
  };
  
  // Toggle collapse for escort sections
  const toggleEscortCollapse = (id: string) => {
    setEscortSections(
      escortSections.map(section => ({
        ...section,
        isCollapsed: section.id === id ? !section.isCollapsed : section.isCollapsed,
      }))
    );
  };
  
  // Toggle collapse for vehicle sections
  const toggleVehicleCollapse = (id: string) => {
    setVehicleSections(
      vehicleSections.map(section => ({
        ...section,
        isCollapsed: section.id === id ? !section.isCollapsed : section.isCollapsed,
      }))
    );
  };
  
  // Toggle collapse for person sections
  const togglePersonCollapse = (id: string) => {
    setPersonSections(
      personSections.map(section => ({
        ...section,
        isCollapsed: section.id === id ? !section.isCollapsed : section.isCollapsed,
      }))
    );
  };
  
  // Update escort data and completeness
  const updateEscortData = (id: string, data: any) => {
    setEscortSections(
      escortSections.map(section => {
        if (section.id === id) {
          const updatedData = { ...section.data, ...data };
          // Check if all required fields are filled
          const isComplete = Boolean(
            updatedData.firstName && 
            updatedData.lastName && 
            updatedData.badgeNumber && 
            updatedData.dob && 
            updatedData.phone && 
            updatedData.email && 
            updatedData.company && 
            updatedData.eIcon && 
            updatedData.dIcon
          );
          
          return {
            ...section,
            data: updatedData,
            isComplete,
          };
        }
        return section;
      })
    );
  };
  
  // Update vehicle data and completeness
  const updateVehicleData = (id: string, data: any) => {
    setVehicleSections(
      vehicleSections.map(section => {
        if (section.id === id) {
          const updatedData = { ...section.data, ...data };
          // Check if all required fields are filled
          const isComplete = Boolean(
            updatedData.vehicleLicense && 
            updatedData.state && 
            updatedData.vehicleColor && 
            updatedData.vehicleDriver && 
            updatedData.reasonForEscort
          );
          
          return {
            ...section,
            data: updatedData,
            isComplete,
          };
        }
        return section;
      })
    );
  };
  
  // Update person data and completeness
  const updatePersonData = (id: string, data: any) => {
    setPersonSections(
      personSections.map(section => {
        if (section.id === id) {
          const updatedData = { ...section.data, ...data };
          // Check if all required fields are filled
          const isComplete = Boolean(
            updatedData.firstName && 
            updatedData.lastName && 
            updatedData.email && 
            updatedData.idType
          );
          
          return {
            ...section,
            data: updatedData,
            isComplete,
          };
        }
        return section;
      })
    );
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
    // Form submission handled by FormButtons component
  };

  // Check if any section is incomplete for validation
  const escortIncomplete = escortSections.some(section => !section.isComplete && !section.isCollapsed);
  const vehicleIncomplete = vehicleSections.some(section => !section.isComplete && !section.isCollapsed);
  const personIncomplete = personSections.some(section => !section.isComplete && !section.isCollapsed);

  return (
    <div className="max-w-md mx-auto bg-[#F5F2F7] rounded-[20px] overflow-hidden shadow-md md:max-w-full">
      <form onSubmit={handleSubmit}>
        <div className="bg-[#F4F0F9] py-4 px-6 text-center">
          <h1 className="text-[22px] font-bold text-[#333]">Escort Request Form</h1>
        </div>
        
        <div className="px-6 py-4">
          <div className="space-y-6">
            <VehicleSection />
            
            <EscortInformationSection 
              escortSections={escortSections}
              onAddEscort={addEscortSection}
              onToggleCollapse={toggleEscortCollapse}
              onUpdateData={updateEscortData}
              addButtonDisabled={escortIncomplete}
            />
            
            <VehicleInformationSection 
              vehicleSections={vehicleSections}
              onAddVehicle={addVehicleSection}
              onToggleCollapse={toggleVehicleCollapse}
              onUpdateData={updateVehicleData}
              addButtonDisabled={vehicleIncomplete}
            />
            
            <ProhibitedItemsSection />
            
            <PersonBeingEscortedSection 
              personSections={personSections}
              onAddPerson={addPersonSection}
              onToggleCollapse={togglePersonCollapse}
              onUpdateData={updatePersonData}
              addButtonDisabled={personIncomplete}
            />
          </div>
          
          <div className="mt-8">
            <FormButtons />
          </div>
        </div>
      </form>
    </div>
  );
};
