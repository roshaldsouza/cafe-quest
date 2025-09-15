import { useState, useMemo } from 'react';
import { Cafe } from '../types/cafe';

export const useCafeFilter = (cafes: Cafe[]) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArea, setSelectedArea] = useState('All');

  const areas = useMemo(() => {
    return Array.from(new Set(cafes.map(cafe => cafe.area))).sort();
  }, [cafes]);

  const filteredCafes = useMemo(() => {
    return cafes.filter(cafe => {
      const matchesSearch = 
        cafe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cafe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cafe.specialties.some(specialty => 
          specialty.toLowerCase().includes(searchTerm.toLowerCase())
        );
      
      const matchesArea = selectedArea === 'All' || cafe.area === selectedArea;
      
      return matchesSearch && matchesArea;
    });
  }, [cafes, searchTerm, selectedArea]);

  return {
    searchTerm,
    setSearchTerm,
    selectedArea,
    setSelectedArea,
    areas,
    filteredCafes
  };
};