import React from 'react';

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<Props> = ({ label, name, placeholder, onChange }) => {
  return (
    <div className="mb-2 flex flex-col">
      <label htmlFor={name} className="hidden">
        {label}
      </label>
      <input
        onChange={onChange}
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        className="form-input focus:ring-0 focus:border-indigo-500 focus:border bg-gray-200 placeholder-gray-400 border-gray-300 px-4 py-3 rounded-md"
      />
    </div>
  );
};

TextInput.defaultProps = {
  placeholder: '',
};

export default TextInput;
