'use client';

import { motion } from 'framer-motion';

interface GalleryFilterProps {
  categories: { id: string; label: string }[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function GalleryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: GalleryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-12">
      {categories.map((category) => {
        const isActive = activeCategory === category.id;
        return (
          <motion.button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-4 py-2 md:px-6 md:py-3 text-sm md:text-base rounded-full font-medium transition-all duration-300 ${
              isActive
                ? 'bg-primary-500 text-white shadow-lg'
                : 'bg-white text-secondary-700 hover:bg-primary-100 hover:text-primary-700 shadow-md'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.label}
          </motion.button>
        );
      })}
    </div>
  );
}
