import React from 'react';

interface PixelBorderProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const PixelBorder: React.FC<PixelBorderProps> = ({ children, className = '', hover = false }) => {
  return (
    <div 
      className={`
        relative
        ${hover ? 'hover:scale-105 hover:-translate-y-1' : ''}
        transition-all duration-200 ease-in-out
        ${className}
      `}
      style={{
        imageRendering: 'pixelated',
        filter: 'contrast(1.1)',
      }}
    >
      <div className="absolute inset-0 bg-black transform translate-x-1 translate-y-1"></div>
      <div className="relative bg-white border-4 border-black">
        {children}
      </div>
    </div>
  );
};