```
██████╗ ██╗██╗  ██╗███████╗██╗         ██████╗ █████╗ ███████╗███████╗
██╔══██╗██║╚██╗██╔╝██╔════╝██║        ██╔════╝██╔══██╗██╔════╝██╔════╝
██████╔╝██║ ╚███╔╝ █████╗  ██║        ██║     ███████║█████╗  █████╗  
██╔═══╝ ██║ ██╔██╗ ██╔══╝  ██║        ██║     ██╔══██║██╔══╝  ██╔══╝  
██║     ██║██╔╝ ██╗███████╗███████╗   ╚██████╗██║  ██║██║     ███████╗
╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝    ╚═════╝╚═╝  ╚═╝╚═╝     ╚══════╝
                                                                        
███████╗██╗███╗   ██╗██████╗ ███████╗██████╗                          
██╔════╝██║████╗  ██║██╔══██╗██╔════╝██╔══██╗                         
█████╗  ██║██╔██╗ ██║██║  ██║█████╗  ██████╔╝                         
██╔══╝  ██║██║╚██╗██║██║  ██║██╔══╝  ██╔══██╗                         
██║     ██║██║ ╚████║██████╔╝███████╗██║  ██║                         
╚═╝     ╚═╝╚═╝  ╚═══╝╚═════╝ ╚══════╝╚═╝  ╚═╝                         
```

## 🎮 GAME DESCRIPTION

**PIXEL CAFE FINDER** is a retro-styled web application that helps you discover the best cafes in Bangalore! Built with React, TypeScript, and Tailwind CSS, featuring authentic 8-bit aesthetics and smooth pixel animations.

```
┌─────────────────────────────────────────────────────────────┐
│  🏆 FEATURES                                                │
├─────────────────────────────────────────────────────────────┤
│  ▶ Real-time cafe search and filtering                     │
│  ▶ Interactive pixel-perfect UI with hover animations      │
│  ▶ Detailed cafe information with ratings & amenities      │
│  ▶ Area-based filtering (Koramangala, Indiranagar, etc.)   │
│  ▶ Responsive design for all screen sizes                  │
│  ▶ Retro gaming aesthetics with modern functionality       │
└─────────────────────────────────────────────────────────────┘
```

## 🕹️ CONTROLS (Getting Started)

### Prerequisites
```bash
# Required items in your inventory:
- Node.js (v18 or higher)
- npm or yarn package manager
```

### Installation Quest
```bash
# Clone the repository
git clone <your-repo-url>
cd pixel-cafe-finder

# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build
```

## 🎯 GAME MECHANICS

### Project Structure
```
src/
├── components/          # Reusable pixel components
│   ├── CafeCard.tsx    # Individual cafe display cards
│   ├── PixelBorder.tsx # Retro border component
│   ├── PixelButton.tsx # Animated button component
│   ├── SearchBar.tsx   # Search functionality
│   └── FilterButtons.tsx # Area filtering buttons
├── data/
│   └── cafes.ts        # Cafe database
├── hooks/
│   └── useCafeFilter.ts # Custom filtering logic
├── types/
│   └── cafe.ts         # TypeScript interfaces
└── App.tsx             # Main game screen
```

### Tech Stack
```
┌─────────────────┬─────────────────────────────────────┐
│ TECHNOLOGY      │ PURPOSE                             │
├─────────────────┼─────────────────────────────────────┤
│ React 18        │ Component-based UI framework        │
│ TypeScript      │ Type-safe development               │
│ Tailwind CSS    │ Utility-first styling               │
│ Vite            │ Fast build tool and dev server      │
│ Lucide React    │ Beautiful pixel-perfect icons       │
└─────────────────┴─────────────────────────────────────┘
```

## 🎨 PIXEL ART DESIGN SYSTEM

### Color Palette
```css
/* Primary Colors */
🟦 Blue:    #3B82F6 (buttons, accents)
🟨 Yellow:  #FDE047 (highlights, active states)
🟩 Green:   #22C55E (success, specialty tags)
🟪 Purple:  #A855F7 (headers, amenity tags)
🟥 Red:     #EF4444 (location pins, errors)

/* Background Gradients */
🌈 Main:    yellow-200 → pink-200 → blue-200
🎯 Cards:   white → gray-50
```

### Animation Effects
- **Hover Scale**: `scale-105` with smooth transitions
- **Button Press**: `scale-95` for tactile feedback
- **Card Lift**: `-translate-y-1` on hover
- **Pixel Shadows**: Black drop shadows for depth

## 🏪 CAFE DATABASE

The app includes **8 carefully curated cafes** across Bangalore:

```
📍 LOCATIONS COVERED:
▶ Indiranagar  ▶ Koramangala   ▶ MG Road
▶ HSR Layout   ▶ Lavelle Road  ▶ Rajajinagar
▶ JP Nagar
```

Each cafe includes:
- ⭐ Rating system (1-5 stars)
- 💰 Price range indicators
- 🏷️ Specialty items and cuisine
- 🛜 Amenities (WiFi, Pet Friendly, etc.)
- 📸 High-quality images from Pexels

## 🎮 GAMEPLAY FEATURES

### Search System
- Real-time text search across cafe names, descriptions, and specialties
- Instant results with pixel-perfect animations

### Filter System
- Area-based filtering with animated buttons
- "All Areas" option to view complete catalog
- Active state indicators with retro styling

### Responsive Design
- Mobile-first approach with breakpoints
- Consistent 8px grid system
- Optimized for desktop, tablet, and mobile

## 🛠️ CUSTOMIZATION

### Adding New Cafes
Edit `src/data/cafes.ts` and add new cafe objects:

```typescript
{
  id: 9,
  name: "Your Cafe Name",
  area: "Area Name",
  rating: 4.5,
  priceRange: "₹₹₹",
  description: "Cafe description",
  specialties: ["Coffee", "Pastries"],
  amenities: ["WiFi", "Pet Friendly"],
  imageUrl: "https://images.pexels.com/...",
  coordinates: { lat: 12.9716, lng: 77.5946 }
}
```

### Styling Modifications
- Colors: Update Tailwind classes in components
- Animations: Modify transition classes and hover effects
- Layout: Adjust grid breakpoints in `App.tsx`

## 🏆 ACHIEVEMENTS UNLOCKED

- ✅ Pixel-perfect retro design
- ✅ Smooth hover animations
- ✅ Real-time search functionality
- ✅ Responsive mobile design
- ✅ TypeScript type safety
- ✅ Component-based architecture
- ✅ Performance optimized

## 🎯 FUTURE POWER-UPS

- 🗺️ Interactive map integration
- ⭐ User reviews and ratings
- 📱 Progressive Web App (PWA)
- 🔔 Favorite cafes system
- 📍 GPS-based distance calculation
- 🎨 Theme customization options

## 🎮 CREDITS

```
┌─────────────────────────────────────────────────────────────┐
│  DEVELOPED BY: Roshal dsouza                                │
│  POWERED BY: React + TypeScript + Tailwind CSS             │
│  IMAGES: Pexels.com                                         │
│  ICONS: Lucide React                                        │
│  INSPIRATION: 8-bit gaming culture + Bangalore cafe scene  │
└─────────────────────────────────────────────────────────────┘
```

## 📜 LICENSE

This project is licensed under the MIT License - see the LICENSE file for details.

---

```
██████╗ ██████╗ ███████╗███████╗███████╗    ███████╗████████╗ █████╗ ██████╗ ████████╗
██╔══██╗██╔══██╗██╔════╝██╔════╝██╔════╝    ██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚══██╔══╝
██████╔╝██████╔╝█████╗  ███████╗███████╗    ███████╗   ██║   ███████║██████╔╝   ██║   
██╔═══╝ ██╔══██╗██╔══╝  ╚════██║╚════██║    ╚════██║   ██║   ██╔══██║██╔══██╗   ██║   
██║     ██║  ██║███████╗███████║███████║    ███████║   ██║   ██║  ██║██║  ██║   ██║   
╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝    ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   
```

**Happy Cafe Hunting! ☕🎮**
