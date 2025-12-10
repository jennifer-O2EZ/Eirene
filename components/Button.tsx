import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyle = "px-8 py-3 transition-all duration-300 tracking-widest uppercase text-xs font-sans font-medium";
  
  const variants = {
    primary: "bg-stone-800 text-stone-50 hover:bg-stone-600 hover:shadow-lg",
    outline: "border border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-stone-50",
    text: "text-stone-600 hover:text-stone-900 underline-offset-4 hover:underline"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
