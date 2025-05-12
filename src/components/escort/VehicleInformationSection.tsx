
import React from "react";
import { FormInput } from "./FormInput";
import { FormSelect } from "./FormSelect";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useIsMobile } from "@/hooks/use-mobile";

interface VehicleSectionProps {
  vehicleSections: Array<{
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
  }>;
  onAddVehicle: () => void;
  onToggleCollapse: (id: string) => void;
  onUpdateData: (id: string, data: any) => void;
  addButtonDisabled: boolean;
}

export const VehicleInformationSection: React.FC<VehicleSectionProps> = ({
  vehicleSections,
  onAddVehicle,
  onToggleCollapse,
  onUpdateData,
  addButtonDisabled
}) => {
  const isMobile = useIsMobile();
  
  const handleUploadLicense = (id: string) => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        onUpdateData(id, { licenseImage: file });
      }
    };
    fileInput.click();
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#663399] font-medium text-lg">Vehicle Information</h2>
        <button
          type="button"
          onClick={onAddVehicle}
          disabled={addButtonDisabled}
          className={`bg-[#663399] text-white rounded-md px-3 py-1 text-sm font-medium ${
            addButtonDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#4A2272]'
          }`}
        >
          Add Vehicle
        </button>
      </div>
      
      {vehicleSections.map((vehicle, index) => (
        <div 
          key={vehicle.id} 
          className={`mb-4 ${index > 0 ? "border border-[#E6DFEC] rounded-md p-3" : ""}`}
        >
          {index > 0 && (
            <Collapsible open={!vehicle.isCollapsed} onOpenChange={() => onToggleCollapse(vehicle.id)}>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">
                    {vehicle.data.vehicleLicense && `License: ${vehicle.data.vehicleLicense}`}
                    {vehicle.data.vehicleColor && ` • ${vehicle.data.vehicleColor}`}
                  </p>
                </div>
                <CollapsibleTrigger asChild>
                  <button type="button" className="text-[#663399]">
                    {vehicle.isCollapsed ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
                  </button>
                </CollapsibleTrigger>
              </div>
              
              <CollapsibleContent>
                <div className="mt-3">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                    <VehicleFormField
                      label="Vehicle License#"
                      required
                      isMobile={isMobile}
                    >
                      <FormInput 
                        value={vehicle.data.vehicleLicense}
                        onChange={(e) => onUpdateData(vehicle.id, { vehicleLicense: e.target.value })}
                        name={`${vehicle.id}-license`}
                        placeholder="Enter License#" 
                      />
                    </VehicleFormField>
                    
                    <VehicleFormField
                      label="State"
                      required
                      isMobile={isMobile}
                    >
                      <FormInput 
                        value={vehicle.data.state}
                        onChange={(e) => onUpdateData(vehicle.id, { state: e.target.value })}
                        name={`${vehicle.id}-state`}
                        placeholder="Enter State" 
                      />
                    </VehicleFormField>
                    
                    <VehicleFormField
                      label="Vehicle Color"
                      required
                      isMobile={isMobile}
                    >
                      <FormSelect 
                        value={vehicle.data.vehicleColor}
                        onChange={(e) => onUpdateData(vehicle.id, { vehicleColor: e.target.value })}
                        options={[
                          { value: "red", label: "Red" },
                          { value: "blue", label: "Blue" },
                          { value: "black", label: "Black" },
                          { value: "white", label: "White" }
                        ]} 
                        placeholder="Select Color"
                      />
                    </VehicleFormField>
                    
                    <VehicleFormField
                      label="Vehicle Driver"
                      required
                      isMobile={isMobile}
                    >
                      <FormSelect 
                        value={vehicle.data.vehicleDriver}
                        onChange={(e) => onUpdateData(vehicle.id, { vehicleDriver: e.target.value })}
                        options={[
                          { value: "driver1", label: "Driver 1" },
                          { value: "driver2", label: "Driver 2" }
                        ]} 
                        placeholder="Select Driver"
                      />
                    </VehicleFormField>
                    
                    <div className="lg:col-span-3">
                      <VehicleFormField
                        label="Reason for Escort"
                        required
                        isMobile={isMobile}
                      >
                        <div className="text-xs text-gray-600 mb-1">
                          Reason for Escort & location they are going to.
                        </div>
                        <textarea
                          value={vehicle.data.reasonForEscort}
                          onChange={(e) => onUpdateData(vehicle.id, { reasonForEscort: e.target.value })}
                          name={`${vehicle.id}-reason`}
                          rows={2}
                          className="w-full p-2 bg-[#E6DFEC] border-0 rounded-md text-sm"
                          placeholder="Enter Reason & location"
                        ></textarea>
                      </VehicleFormField>
                    </div>
                    
                    <div className="lg:col-span-3">
                      <div className={isMobile ? "flex items-start" : "mb-3"}>
                        <div className={isMobile ? "w-1/2" : ""}>
                          <label className="block text-[#663399] text-sm mb-1">
                            Auth by OPS.
                          </label>
                          <p className="text-xs text-gray-600">
                            This option is for any extra large equipment, vehicle or situation required to have special approval.
                          </p>
                        </div>
                        <div className={isMobile ? "w-1/2 flex items-center space-x-4" : "flex items-center space-x-4 mt-2"}>
                          <label className="flex items-center space-x-2">
                            <input 
                              type="radio" 
                              name={`${vehicle.id}-authByOps`} 
                              value="yes" 
                              checked={vehicle.data.authByOps === 'yes'}
                              onChange={() => onUpdateData(vehicle.id, { authByOps: 'yes' })}
                              className="w-4 h-4 text-[#663399]" 
                            />
                            <span className="text-sm">Yes</span>
                          </label>
                          <label className="flex items-center space-x-2">
                            <input 
                              type="radio" 
                              name={`${vehicle.id}-authByOps`} 
                              value="no" 
                              checked={vehicle.data.authByOps === 'no'}
                              onChange={() => onUpdateData(vehicle.id, { authByOps: 'no' })}
                              className="w-4 h-4 text-[#663399]" 
                            />
                            <span className="text-sm">No</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div className={isMobile ? "flex items-center" : "mb-3"}>
                      <div className={isMobile ? "w-1/2" : ""}>
                        <label className="block text-[#663399] text-sm mb-1">
                          Upload License Image<span className="text-red-500">*</span>
                        </label>
                      </div>
                      <div className={isMobile ? "w-1/2" : "mt-1"}>
                        <button
                          type="button"
                          onClick={() => handleUploadLicense(vehicle.id)}
                          className="bg-[#663399] text-white rounded-md px-4 py-1.5 text-sm hover:bg-[#4A2272]"
                        >
                          {vehicle.data.licenseImage ? "Uploaded" : "Upload"}
                        </button>
                        {vehicle.data.licenseImage && (
                          <span className="text-xs text-green-600 ml-2">
                            {vehicle.data.licenseImage.name}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          )}
          
          {(index === 0 || !vehicle.isCollapsed) && index === 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              <VehicleFormField
                label="Vehicle License#"
                required
                isMobile={isMobile}
              >
                <FormInput 
                  value={vehicle.data.vehicleLicense}
                  onChange={(e) => onUpdateData(vehicle.id, { vehicleLicense: e.target.value })}
                  name={`${vehicle.id}-license`}
                  placeholder="Enter License#" 
                />
              </VehicleFormField>
              
              <VehicleFormField
                label="State"
                required
                isMobile={isMobile}
              >
                <FormInput 
                  value={vehicle.data.state}
                  onChange={(e) => onUpdateData(vehicle.id, { state: e.target.value })}
                  name={`${vehicle.id}-state`}
                  placeholder="Enter State" 
                />
              </VehicleFormField>
              
              <VehicleFormField
                label="Vehicle Color"
                required
                isMobile={isMobile}
              >
                <FormSelect 
                  value={vehicle.data.vehicleColor}
                  onChange={(e) => onUpdateData(vehicle.id, { vehicleColor: e.target.value })}
                  options={[
                    { value: "red", label: "Red" },
                    { value: "blue", label: "Blue" },
                    { value: "black", label: "Black" },
                    { value: "white", label: "White" }
                  ]} 
                  placeholder="Select Color"
                />
              </VehicleFormField>
              
              <VehicleFormField
                label="Vehicle Driver"
                required
                isMobile={isMobile}
              >
                <FormSelect 
                  value={vehicle.data.vehicleDriver}
                  onChange={(e) => onUpdateData(vehicle.id, { vehicleDriver: e.target.value })}
                  options={[
                    { value: "driver1", label: "Driver 1" },
                    { value: "driver2", label: "Driver 2" }
                  ]} 
                  placeholder="Select Driver"
                />
              </VehicleFormField>
              
              <div className="lg:col-span-3">
                <VehicleFormField
                  label="Reason for Escort"
                  required
                  isMobile={isMobile}
                >
                  <div className="text-xs text-gray-600 mb-1">
                    Reason for Escort & location they are going to.
                  </div>
                  <textarea
                    value={vehicle.data.reasonForEscort}
                    onChange={(e) => onUpdateData(vehicle.id, { reasonForEscort: e.target.value })}
                    name={`${vehicle.id}-reason`}
                    rows={2}
                    className="w-full p-2 bg-[#E6DFEC] border-0 rounded-md text-sm"
                    placeholder="Enter Reason & location"
                  ></textarea>
                </VehicleFormField>
              </div>
              
              <div className="lg:col-span-3">
                <div className={isMobile ? "flex items-start" : "mb-3"}>
                  <div className={isMobile ? "w-1/2" : ""}>
                    <label className="block text-[#663399] text-sm mb-1">
                      Auth by OPS.
                    </label>
                    <p className="text-xs text-gray-600">
                      This option is for any extra large equipment, vehicle or situation required to have special approval.
                    </p>
                  </div>
                  <div className={isMobile ? "w-1/2 flex items-center space-x-4" : "flex items-center space-x-4 mt-2"}>
                    <label className="flex items-center space-x-2">
                      <input 
                        type="radio" 
                        name={`${vehicle.id}-authByOps`} 
                        value="yes" 
                        checked={vehicle.data.authByOps === 'yes'}
                        onChange={() => onUpdateData(vehicle.id, { authByOps: 'yes' })}
                        className="w-4 h-4 text-[#663399]" 
                      />
                      <span className="text-sm">Yes</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input 
                        type="radio" 
                        name={`${vehicle.id}-authByOps`} 
                        value="no" 
                        checked={vehicle.data.authByOps === 'no'}
                        onChange={() => onUpdateData(vehicle.id, { authByOps: 'no' })}
                        className="w-4 h-4 text-[#663399]" 
                      />
                      <span className="text-sm">No</span>
                    </label>
                  </div>
                </div>
              </div>
              
              <div className={isMobile ? "flex items-center" : "mb-3"}>
                <div className={isMobile ? "w-1/2" : ""}>
                  <label className="block text-[#663399] text-sm mb-1">
                    Upload License Image<span className="text-red-500">*</span>
                  </label>
                </div>
                <div className={isMobile ? "w-1/2" : "mt-1"}>
                  <button
                    type="button"
                    onClick={() => handleUploadLicense(vehicle.id)}
                    className="bg-[#663399] text-white rounded-md px-4 py-1.5 text-sm hover:bg-[#4A2272]"
                  >
                    {vehicle.data.licenseImage ? "Uploaded" : "Upload"}
                  </button>
                  {vehicle.data.licenseImage && (
                    <span className="text-xs text-green-600 ml-2">
                      {vehicle.data.licenseImage.name}
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

interface VehicleFormFieldProps {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  isMobile?: boolean;
}

const VehicleFormField: React.FC<VehicleFormFieldProps> = ({
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
