import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  onChange: (date: any) => void;
}

const DateInput: React.FC<Props> = ({ label, name, placeholder, onChange }) => {
  const [localDate, setLocalDate] = useState<any>(new Date());

  return (
    <div className="mb-2 flex flex-col md:flex-grow">
      <label htmlFor="start_date" className="hidden">
        {label}
      </label>
      <DatePicker
        selected={localDate}
        onChange={(date) => {
          onChange(date);
          setLocalDate(date);
        }}
        nextMonthButtonLabel=">"
        previousMonthButtonLabel="<"
        placeholderText={placeholder}
        name={name}
      />
    </div>
  );
};

DateInput.defaultProps = {
  placeholder: '',
};

export default DateInput;
