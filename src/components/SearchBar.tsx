import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative w-full max-w-md">
      <div className="absolute inset-0 bg-black transform translate-x-1 translate-y-1"></div>
      <div className="relative flex items-center bg-white border-4 border-black">
        <Search className="absolute left-3 text-gray-500" size={20} />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search cafes..."
          className="w-full pl-10 pr-4 py-3 font-mono text-black bg-transparent focus:outline-none"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>
    </div>
  );
};