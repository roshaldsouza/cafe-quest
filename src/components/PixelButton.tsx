import React from 'react';

interface PixelButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

export const PixelButton: React.FC<PixelButtonProps> = ({ 
  children, 
  onClick, 
  active = false, 
  variant = 'primary',
  className = ''
}) => {
  const variants = {
    primary: active ? 'bg-yellow-400 text-black' : 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: active ? 'bg-green-400 text-black' : 'bg-gray-600 text-white hover:bg-gray-700',
    accent: active ? 'bg-pink-400 text-black' : 'bg-purple-500 text-white hover:bg-purple-600',
  };

  return (
    <button
      onClick={onClick}
      className={`
        relative font-mono font-bold text-sm px-4 py-2 border-4 border-black
        transform transition-all duration-150 ease-in-out
        hover:scale-105 hover:-translate-y-1
        active:scale-95 active:translate-y-0
        ${variants[variant]}
        ${className}
      `}
      style={{ imageRendering: 'pixelated' }}
    >
      <div className="absolute inset-0 bg-black transform translate-x-1 translate-y-1 -z-10"></div>
      {children}
    </button>
  );
};