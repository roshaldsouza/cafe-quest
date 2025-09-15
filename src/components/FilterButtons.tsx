import React from 'react';
import { PixelButton } from './PixelButton';

interface FilterButtonsProps {
  areas: string[];
  selectedArea: string;
  onAreaChange: (area: string) => void;
}

export const FilterButtons: React.FC<FilterButtonsProps> = ({ 
  areas, 
  selectedArea, 
  onAreaChange 
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      <PixelButton
        active={selectedArea === 'All'}
        onClick={() => onAreaChange('All')}
        variant="accent"
      >
        All Areas
      </PixelButton>
      {areas.map((area) => (
        <PixelButton
          key={area}
          active={selectedArea === area}
          onClick={() => onAreaChange(area)}
          variant="secondary"
        >
          {area}
        </PixelButton>
      ))}
    </div>
  );
};