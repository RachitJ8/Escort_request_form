
import React from "react";
import { FormInput } from "./FormInput";
import { FormSelect } from "./FormSelect";
import { DatePickerInput } from "./DatePickerInput";
import { PhoneInput } from "./PhoneInput";
import { ChevronDown, ChevronUp } from "lucide-react";

interface PersonSectionProps {
  personSections: Array<{
    id: string;
    isCollapsed: boolean;
    data: {
      firstName: string;
      lastName: string;
      email: string;
      idType: string;
    };
  }>;
  onAddPerson: () => void;
  onToggleCollapse: (id: string) => void;
  onUpdateData: (id: string, data: any) => void;
}

export const PersonBeingEscortedSection: React.FC<PersonSectionProps> = ({
  personSections,
  onAddPerson,
  onToggleCollapse,
  onUpdateData,
}) => {
  return (
    <div className="bg-[#FAF8FC] rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[#663399] font-medium text-lg">Person Being Escorted</h2>
        <button
          type="button"
          onClick={onAddPerson}
          className="bg-[#663399] text-white rounded-md px-3 py-1 text-sm font-medium"
        >
          Add Person
        </button>
      </div>

      {personSections.length > 0 ? (
        personSections.map((person) => (
          <div 
            key={person.id} 
            className="mb-4 bg-[#F4F0F9] rounded-md p-3"
          >
            {person.isCollapsed ? (
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm"><span className="font-medium">Name:</span> {person.data.firstName} {person.data.lastName}</p>
                  <p className="text-sm"><span className="font-medium">Email:</span> {person.data.email}</p>
                  <p className="text-sm"><span className="font-medium">ID Type:</span> {person.data.idType || 'Driver\'s License'}</p>
                </div>
                <button
                  type="button"
                  onClick={() => onToggleCollapse(person.id)}
                  className="text-[#663399]"
                >
                  <ChevronDown size={20} />
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-1/2">
                    <label className="block text-[#663399] text-sm">
                      First Name<span className="text-red-500">*</span>
                    </label>
                  </div>
                  <div className="w-1/2">
                    <FormInput 
                      name={`${person.id}-firstName`} 
                      placeholder="First Name" 
                      value={person.data.firstName}
                      onChange={(e) => onUpdateData(person.id, { firstName: e.target.value })}
                    />
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-1/2">
                    <label className="block text-[#663399] text-sm">
                      Last Name<span className="text-red-500">*</span>
                    </label>
                  </div>
                  <div className="w-1/2">
                    <FormInput 
                      name={`${person.id}-lastName`} 
                      placeholder="Last Name" 
                      value={person.data.lastName}
                      onChange={(e) => onUpdateData(person.id, { lastName: e.target.value })}
                    />
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-1/2">
                    <label className="block text-[#663399] text-sm">
                      Date of Birth<span className="text-red-500">*</span>
                    </label>
                  </div>
                  <div className="w-1/2">
                    <DatePickerInput name={`${person.id}-dob`} placeholder="MM/DD/YYYY" />
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-1/2">
                    <label className="block text-[#663399] text-sm">
                      Phone<span className="text-red-500">*</span>
                    </label>
                  </div>
                  <div className="w-1/2">
                    <PhoneInput name={`${person.id}-phone`} placeholder="1234567890" />
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-1/2">
                    <label className="block text-[#663399] text-sm">
                      Email<span className="text-red-500">*</span>
                    </label>
                  </div>
                  <div className="w-1/2">
                    <FormInput 
                      name={`${person.id}-email`} 
                      placeholder="abc@mail.com" 
                      type="email"
                      value={person.data.email}
                      onChange={(e) => onUpdateData(person.id, { email: e.target.value })}
                    />
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-1/2">
                    <label className="block text-[#663399] text-sm">
                      Reason for visit<span className="text-red-500">*</span>
                    </label>
                  </div>
                  <div className="w-1/2">
                    <FormInput name={`${person.id}-reason`} placeholder="Enter Reason" />
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-1/2">
                    <label className="block text-[#663399] text-sm">
                      Company<span className="text-red-500">*</span>
                    </label>
                  </div>
                  <div className="w-1/2">
                    <FormSelect 
                      name={`${person.id}-company`}
                      options={[]} 
                      placeholder="Select company"
                    />
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-1/2">
                    <label className="block text-[#663399] text-sm">
                      Type of ID<span className="text-red-500">*</span>
                    </label>
                  </div>
                  <div className="w-1/2">
                    <FormSelect 
                      name={`${person.id}-idType`}
                      options={[{ value: "drivers", label: "Driver's License" }]} 
                      placeholder="Select ID"
                      value={person.data.idType}
                      onChange={(e) => onUpdateData(person.id, { idType: e.target.value })}
                    />
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-1/2">
                    <label className="block text-[#663399] text-sm">
                      ID #<span className="text-red-500">*</span>
                    </label>
                  </div>
                  <div className="w-1/2">
                    <FormInput name={`${person.id}-idNumber`} placeholder="12312434532" />
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-1/2">
                    <label className="block text-[#663399] text-sm">
                      Expiration Date<span className="text-red-500">*</span>
                    </label>
                  </div>
                  <div className="w-1/2">
                    <DatePickerInput name={`${person.id}-expDate`} placeholder="MM/DD/YYYY" />
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-1/2">
                    <label className="block text-[#663399] text-sm">
                      Issuing Country<span className="text-red-500">*</span>
                    </label>
                  </div>
                  <div className="w-1/2">
                    <FormSelect 
                      name={`${person.id}-country`}
                      options={[]} 
                      placeholder="Select Country"
                    />
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-1/2">
                    <label className="block text-[#663399] text-sm">
                      Status<span className="text-red-500">*</span>
                    </label>
                  </div>
                  <div className="w-1/2">
                    <FormSelect 
                      name={`${person.id}-status`}
                      options={[]} 
                      placeholder="Select Status"
                    />
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-1/2">
                    <label className="block text-[#663399] text-sm">
                      Upload Document Image<span className="text-red-500">*</span>
                    </label>
                  </div>
                  <div className="w-1/2">
                    <button
                      type="button"
                      className="bg-[#663399] text-white rounded-md px-4 py-1.5 text-sm"
                    >
                      Capture
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))
      ) : (
        <div className="space-y-3">
          <div className="flex items-center">
            <div className="w-1/2">
              <label className="block text-[#663399] text-sm">
                First Name<span className="text-red-500">*</span>
              </label>
            </div>
            <div className="w-1/2">
              <FormInput name="firstName" placeholder="First Name" />
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-1/2">
              <label className="block text-[#663399] text-sm">
                Last Name<span className="text-red-500">*</span>
              </label>
            </div>
            <div className="w-1/2">
              <FormInput name="lastName" placeholder="Last Name" />
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-1/2">
              <label className="block text-[#663399] text-sm">
                Date of Birth<span className="text-red-500">*</span>
              </label>
            </div>
            <div className="w-1/2">
              <DatePickerInput name="dob" placeholder="MM/DD/YYYY" />
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-1/2">
              <label className="block text-[#663399] text-sm">
                Phone<span className="text-red-500">*</span>
              </label>
            </div>
            <div className="w-1/2">
              <PhoneInput name="phone" placeholder="1234567890" />
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-1/2">
              <label className="block text-[#663399] text-sm">
                Email<span className="text-red-500">*</span>
              </label>
            </div>
            <div className="w-1/2">
              <FormInput name="email" placeholder="abc@mail.com" type="email" />
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-1/2">
              <label className="block text-[#663399] text-sm">
                Reason for visit<span className="text-red-500">*</span>
              </label>
            </div>
            <div className="w-1/2">
              <FormInput name="reason" placeholder="Enter Reason" />
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-1/2">
              <label className="block text-[#663399] text-sm">
                Company<span className="text-red-500">*</span>
              </label>
            </div>
            <div className="w-1/2">
              <FormSelect 
                name="company"
                options={[]} 
                placeholder="Select company"
              />
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-1/2">
              <label className="block text-[#663399] text-sm">
                Type of ID<span className="text-red-500">*</span>
              </label>
            </div>
            <div className="w-1/2">
              <FormSelect 
                name="idType"
                options={[]} 
                placeholder="Select ID"
              />
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-1/2">
              <label className="block text-[#663399] text-sm">
                ID #<span className="text-red-500">*</span>
              </label>
            </div>
            <div className="w-1/2">
              <FormInput name="idNumber" placeholder="12312434532" />
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-1/2">
              <label className="block text-[#663399] text-sm">
                Expiration Date<span className="text-red-500">*</span>
              </label>
            </div>
            <div className="w-1/2">
              <DatePickerInput name="expDate" placeholder="MM/DD/YYYY" />
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-1/2">
              <label className="block text-[#663399] text-sm">
                Issuing Country<span className="text-red-500">*</span>
              </label>
            </div>
            <div className="w-1/2">
              <FormSelect 
                name="country"
                options={[]} 
                placeholder="Select Country"
              />
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-1/2">
              <label className="block text-[#663399] text-sm">
                Status<span className="text-red-500">*</span>
              </label>
            </div>
            <div className="w-1/2">
              <FormSelect 
                name="status"
                options={[]} 
                placeholder="Select Status"
              />
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-1/2">
              <label className="block text-[#663399] text-sm">
                Upload Document Image<span className="text-red-500">*</span>
              </label>
            </div>
            <div className="w-1/2">
              <button
                type="button"
                className="bg-[#663399] text-white rounded-md px-4 py-1.5 text-sm"
              >
                Capture
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
