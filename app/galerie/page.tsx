'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import GalleryFilter from '@/components/gallery/GalleryFilter';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { GALLERY_IMAGES, GALLERY_CATEGORIES } from '@/lib/gallery-data';
import { Camera } from 'lucide-react';

export default function GaleriePage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages =
    activeCategory === 'all'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <Section background="primary" padding="xl">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fade">
            <Camera className="w-16 h-16 text-primary-600 mx-auto mb-6" />
            <h1 className="font-display text-5xl md:text-6xl text-secondary-900 mb-6">
              Unsere Galerie
            </h1>
            <p className="text-xl text-secondary-700 leading-relaxed">
              Lassen Sie sich von unseren Arbeiten inspirieren. Jede Kundin ist
              einzigartig – sehen Sie selbst!
            </p>
          </AnimatedSection>
        </div>
      </Section>

      {/* Gallery Section */}
      <Section background="white" padding="xl">
        <AnimatedSection animation="fade">
          {/* Filter */}
          <GalleryFilter
            categories={GALLERY_CATEGORIES}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          {/* Image Count */}
          <p className="text-center text-secondary-600 mb-8">
            {filteredImages.length} {filteredImages.length === 1 ? 'Bild' : 'Bilder'}
          </p>

          {/* Grid */}
          {filteredImages.length > 0 ? (
            <GalleryGrid images={filteredImages} />
          ) : (
            <div className="text-center py-16">
              <Camera className="w-16 h-16 text-secondary-300 mx-auto mb-4" />
              <p className="text-secondary-500">
                Keine Bilder in dieser Kategorie vorhanden.
              </p>
            </div>
          )}
        </AnimatedSection>
      </Section>

      {/* Info Section */}
      <Section background="gray" padding="md">
        <AnimatedSection animation="fade">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-secondary-600 text-sm">
              <strong>Hinweis:</strong> Die Bilder sind Platzhalter und werden durch
              echte Fotos Ihrer Arbeiten ersetzt. Alle Arbeiten wurden mit Einwilligung
              der Kundinnen fotografiert.
            </p>
          </div>
        </AnimatedSection>
      </Section>
    </>
  );
}
