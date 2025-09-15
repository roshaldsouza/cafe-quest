export interface Cafe {
  id: number;
  name: string;
  area: string;
  rating: number;
  priceRange: string;
  description: string;
  specialties: string[];
  amenities: string[];
  imageUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}