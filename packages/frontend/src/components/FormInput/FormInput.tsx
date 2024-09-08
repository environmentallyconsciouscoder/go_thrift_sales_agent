import React from 'react';

interface FormInputProps {
  id: string;
  label: string;
  value: string | number;
  type?: "text" | "number";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number
}

const FormInput: React.FC<FormInputProps> = ({ id, label, value, onChange, type, min }) => (
  <div className="flex flex-col">
    <label htmlFor={id} className="text-sm font-bold text-gray-700 mb-1 text-left">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
      value={value === 0 ? '' : value}
      onChange={onChange}
      required
      min={min}
    />
  </div>
);

export default FormInput;