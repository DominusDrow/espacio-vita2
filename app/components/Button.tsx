"use client";

import React from 'react';

interface ButtonProps {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  // The onClick event is handled internally.
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {

  return (
    <button onClick={onClick} className="flex items-center gap-3 bg-black rounded-3xl p-3 group cursor-pointer">
      <div className="line-height-[1em] overflow-hidden">
        <div className="text-nowrap text-[18px] text-white font-medium uppercase">{label}</div>
      </div>
      <div className="w-3 h-3 border border-white rounded-full transition-all duration-300 ease-in-out group-hover:scale-50 group-hover:bg-white"></div>
    </button>
  );
};

export default Button;
