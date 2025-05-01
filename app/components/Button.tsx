// Button.tsx
// A reusable button component, adorned with Tailwind CSS and typed with TypeScript.
// This component exemplifies an "atom" in your design system, ready to shine on any page.

"use client";

import React from 'react';

/**
 * Props for the Button component.
 *
 * @interface ButtonProps
 * @property {string} label - The text to display inside the button.
 */
interface ButtonProps {
  label: string;
  // The onClick event is handled internally.
}

/**
 * Button component renders a styled button that logs a message when clicked.
 *
 * @component
 * @param {ButtonProps} props - The properties object.
 * @param {string} props.label - The label to display on the button.
 * @returns {JSX.Element} The rendered button component.
 */
const Button: React.FC<ButtonProps> = ({ label }) => {
  /**
   * Handle the button click event.
   *
   * This function logs a message to the console when the button is pressed.
   *
   * @function handleClick
   * @returns {void}
   */
  const handleClick = (): void => {
    console.log('¡El botón ha sido presionado!');
    // Additional logic can be added here.
  };

  return (
    <button 
      onClick={handleClick} 
      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded"
    >
      {label}
    </button>
  );
};

export default Button;
