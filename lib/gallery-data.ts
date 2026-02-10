export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'haircuts' | 'color' | 'extensions' | 'cosmetics';
  featured: boolean;
  width: number;
  height: number;
}

// Placeholder images - to be replaced with actual salon photos
export const GALLERY_IMAGES: GalleryImage[] = [
  // Haircuts
  {
    id: 'haircut-1',
    src: '/images/gallery/haircuts/cut-1.jpg',
    alt: 'Moderner Damenschnitt mit Volumen',
    category: 'haircuts',
    featured: true,
    width: 800,
    height: 1000,
  },
  {
    id: 'haircut-2',
    src: '/images/gallery/haircuts/cut-2.jpg',
    alt: 'Eleganter Bob-Haarschnitt',
    category: 'haircuts',
    featured: true,
    width: 800,
    height: 1000,
  },
  {
    id: 'haircut-3',
    src: '/images/gallery/haircuts/cut-3.jpg',
    alt: 'Kurzhaarschnitt mit Styling',
    category: 'haircuts',
    featured: false,
    width: 800,
    height: 1000,
  },
  {
    id: 'haircut-4',
    src: '/images/gallery/haircuts/cut-4.jpg',
    alt: 'Langes Haar mit Stufen',
    category: 'haircuts',
    featured: false,
    width: 800,
    height: 1000,
  },

  // Color
  {
    id: 'color-1',
    src: '/images/gallery/color/color-1.jpg',
    alt: 'Natürliche Balayage-Färbung',
    category: 'color',
    featured: true,
    width: 800,
    height: 1000,
  },
  {
    id: 'color-2',
    src: '/images/gallery/color/color-2.jpg',
    alt: 'Blonde Strähnen',
    category: 'color',
    featured: true,
    width: 800,
    height: 1000,
  },
  {
    id: 'color-3',
    src: '/images/gallery/color/color-3.jpg',
    alt: 'Kupfer-Tönung',
    category: 'color',
    featured: false,
    width: 800,
    height: 1000,
  },
  {
    id: 'color-4',
    src: '/images/gallery/color/color-4.jpg',
    alt: 'Platinblonde Coloration',
    category: 'color',
    featured: false,
    width: 800,
    height: 1000,
  },

  // Extensions
  {
    id: 'extensions-1',
    src: '/images/gallery/extensions/ext-1.jpg',
    alt: 'Great Lengths Haarverlängerung',
    category: 'extensions',
    featured: true,
    width: 800,
    height: 1000,
  },
  {
    id: 'extensions-2',
    src: '/images/gallery/extensions/ext-2.jpg',
    alt: 'Natürliche Extensions PIANO Palette',
    category: 'extensions',
    featured: true,
    width: 800,
    height: 1000,
  },
  {
    id: 'extensions-3',
    src: '/images/gallery/extensions/ext-3.jpg',
    alt: 'Haarverdichtung mit Extensions',
    category: 'extensions',
    featured: false,
    width: 800,
    height: 1000,
  },

  // Cosmetics
  {
    id: 'cosmetics-1',
    src: '/images/gallery/cosmetics/cosm-1.jpg',
    alt: 'Professionelles Make-up',
    category: 'cosmetics',
    featured: true,
    width: 800,
    height: 1000,
  },
  {
    id: 'cosmetics-2',
    src: '/images/gallery/cosmetics/cosm-2.jpg',
    alt: 'Gesichtsbehandlung',
    category: 'cosmetics',
    featured: false,
    width: 800,
    height: 1000,
  },
];

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'Alle Arbeiten' },
  { id: 'haircuts', label: 'Haarschnitte' },
  { id: 'color', label: 'Farben & Strähnen' },
  { id: 'extensions', label: 'Great Lengths' },
  { id: 'cosmetics', label: 'Kosmetik' },
];
