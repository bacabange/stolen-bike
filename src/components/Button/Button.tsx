import React from 'react';

const Button: React.FC = () => {
  return (
    <button
      type="button"
      className="border-0 w-full bg-indigo-500 hover:bg-indigo-600 focus:ring-2 transition-all text-white px-4 py-3 rounded-md uppercase font-semibold"
    >
      Search
    </button>
  );
};

export default Button;
