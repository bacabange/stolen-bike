import React from 'react';
interface Props {
  onClick?: () => void;
  title: string;
}

const Button: React.FC<Props> = ({onClick, title}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="border-0 w-full bg-indigo-500 hover:bg-indigo-600 focus:ring-2 transition-all text-white px-4 py-3 rounded-md uppercase font-semibold"
    >
      {title}
    </button>
  );
};

export default Button;
