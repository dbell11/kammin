'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Camera } from 'lucide-react';
import type { GalleryImage } from '@/lib/gallery-data';

interface GalleryGridProps {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      <AnimatePresence mode="popLayout">
        {images.map((image) => (
          <motion.div
            key={image.id}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="group relative aspect-[3/4] bg-gradient-to-br from-primary-200 to-accent-200 rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            {/* Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <Camera className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p className="text-xs opacity-75">{image.alt}</p>
              </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4">
                <p className="text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
