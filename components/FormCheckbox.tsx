import React from 'react';

interface FormCheckboxProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  value?: string;
}

const FormCheckbox: React.FC<FormCheckboxProps> = ({
  label,
  name,
  checked,
  onChange,
  className = '',
  value,
}) => {
  return (
    <label className={`flex items-center cursor-pointer ${className}`}>
      <input
        type="checkbox"
        id={value ? `${name}-${value}`: name}
        name={name}
        checked={checked}
        onChange={onChange}
        value={value}
        className="h-5 w-5 rounded border-gray-600 bg-gray-700 text-cyan-500 focus:ring-cyan-600"
      />
      <span className="ml-3 text-gray-300 font-semibold">
        {label}
      </span>
    </label>
  );
};

export default FormCheckbox;
