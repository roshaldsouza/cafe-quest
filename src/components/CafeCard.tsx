import React from 'react';
import { Star, MapPin, Wifi, Coffee, Users } from 'lucide-react';
import { Cafe } from '../types/cafe';
import { PixelBorder } from './PixelBorder';

interface CafeCardProps {
  cafe: Cafe;
}

export const CafeCard: React.FC<CafeCardProps> = ({ cafe }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi':
        return <Wifi size={14} />;
      case 'pet friendly':
      case 'family friendly':
        return <Users size={14} />;
      default:
        return <Coffee size={14} />;
    }
  };

  return (
    <PixelBorder hover className="w-full">
      <div className="p-4 bg-gradient-to-br from-white to-gray-50">
        <div className="aspect-video mb-4 bg-gray-200 border-2 border-black overflow-hidden">
          <img
            src={cafe.imageUrl}
            alt={cafe.name}
            className="w-full h-full object-cover"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-start">
            <h3 className="font-mono font-bold text-lg text-black">{cafe.name}</h3>
            <span className="font-mono text-sm bg-green-400 text-black px-2 py-1 border-2 border-black">
              {cafe.priceRange}
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <MapPin size={16} className="text-red-500" />
            <span className="font-mono text-sm text-gray-700">{cafe.area}</span>
          </div>
          
          <div className="flex items-center space-x-1">
            {renderStars(cafe.rating)}
            <span className="font-mono text-sm ml-2 text-gray-700">({cafe.rating})</span>
          </div>
          
          <p className="font-mono text-xs text-gray-600 leading-relaxed">
            {cafe.description}
          </p>
          
          <div className="space-y-2">
            <div>
              <h4 className="font-mono font-bold text-sm text-black mb-1">Specialties:</h4>
              <div className="flex flex-wrap gap-1">
                {cafe.specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="font-mono text-xs bg-blue-200 text-blue-800 px-2 py-1 border border-blue-400"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-mono font-bold text-sm text-black mb-1">Amenities:</h4>
              <div className="flex flex-wrap gap-1">
                {cafe.amenities.slice(0, 4).map((amenity, index) => (
                  <span
                    key={index}
                    className="font-mono text-xs bg-purple-200 text-purple-800 px-2 py-1 border border-purple-400 flex items-center gap-1"
                  >
                    {getAmenityIcon(amenity)}
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PixelBorder>
  );
};