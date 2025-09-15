import React from 'react';
import { Coffee, MapPin, Star } from 'lucide-react';
import { cafes } from './data/cafes';
import { CafeCard } from './components/CafeCard';
import { SearchBar } from './components/SearchBar';
import { FilterButtons } from './components/FilterButtons';
import { PixelBorder } from './components/PixelBorder';
import { useCafeFilter } from './hooks/useCafeFilter';

function App() {
  const {
    searchTerm,
    setSearchTerm,
    selectedArea,
    setSelectedArea,
    areas,
    filteredCafes
  } = useCafeFilter(cafes);

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-yellow-200 via-pink-200 to-blue-200"
      style={{ imageRendering: 'pixelated' }}
    >
      {/* Header */}
      <header className="relative py-8">
        <div className="container mx-auto px-4">
          <PixelBorder className="max-w-4xl mx-auto">
            <div className="text-center py-8 bg-gradient-to-r from-purple-400 to-pink-400">
              <div className="flex items-center justify-center mb-4">
                <Coffee size={48} className="text-white mr-4" />
                <h1 className="font-mono font-bold text-4xl md:text-6xl text-white">
                  CAFE QUEST
                </h1>
                <Coffee size={48} className="text-white ml-4" />
              </div>
              <div className="flex items-center justify-center text-white">
                <MapPin size={20} className="mr-2" />
                <p className="font-mono text-lg">Discover Amazing Cafes in Bangalore</p>
                <Star size={20} className="ml-2 text-yellow-300 fill-current" />
              </div>
            </div>
          </PixelBorder>
        </div>
      </header>

      {/* Search and Filters */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
              <SearchBar 
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
              />
            </div>
            
            <div className="flex justify-center">
              <FilterButtons
                areas={areas}
                selectedArea={selectedArea}
                onAreaChange={setSelectedArea}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results Counter */}
      <section className="py-4">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <PixelBorder className="inline-block">
              <div className="px-4 py-2 bg-green-300">
                <p className="font-mono font-bold text-black">
                  Found {filteredCafes.length} awesome cafe{filteredCafes.length !== 1 ? 's' : ''}
                  {selectedArea !== 'All' && ` in ${selectedArea}`}
                </p>
              </div>
            </PixelBorder>
          </div>
        </div>
      </section>

      {/* Cafe Grid */}
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCafes.map((cafe) => (
                <div
                  key={cafe.id}
                  className="transform transition-all duration-300 hover:scale-105"
                >
                  <CafeCard cafe={cafe} />
                </div>
              ))}
            </div>
            
            {filteredCafes.length === 0 && (
              <div className="text-center py-16">
                <PixelBorder className="inline-block">
                  <div className="px-8 py-6 bg-red-300">
                    <Coffee size={48} className="mx-auto mb-4 text-red-800" />
                    <p className="font-mono font-bold text-xl text-red-800">
                      No cafes found!
                    </p>
                    <p className="font-mono text-sm text-red-700 mt-2">
                      Try adjusting your search or filter options
                    </p>
                  </div>
                </PixelBorder>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12">
        <div className="container mx-auto px-4">
          <PixelBorder className="max-w-2xl mx-auto">
            <div className="text-center py-6 bg-gradient-to-r from-blue-400 to-purple-400">
              <p className="font-mono text-white font-bold">
                🎮 PIXEL CAFES • BANGALORE EDITION 🎮
              </p>
              <p className="font-mono text-blue-100 text-sm mt-2">
                Retro vibes, modern coffee culture
              </p>
            </div>
          </PixelBorder>
        </div>
      </footer>
    </div>
  );
}

export default App;