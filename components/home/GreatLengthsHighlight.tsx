'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { Sparkles, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import AnimatedSection from '@/components/ui/AnimatedSection';

const features = [
  'Original Great Lengths Technologie',
  'Keratin-Bonding für natürliche Verbindungen',
  'PIANO Farbpalette für perfekte Farbanpassung',
  'Unsichtbare und komfortable Extensions',
  'Lang anhaltende Ergebnisse',
  'Individuelle Beratung und Anpassung',
];

const extensionImages = [
  {
    src: '/images/extensions/654cf156387ea.png',
    alt: 'Great Lengths Extensions – Natürliche Haarverlängerung',
  },
  {
    src: '/images/extensions/654cf15639425.png',
    alt: 'Great Lengths Extensions – Keratin-Bonding Ergebnis',
  },
  {
    src: '/images/extensions/654cf156397e6.png',
    alt: 'Great Lengths Extensions – PIANO Farbpalette',
  },
  {
    src: '/images/extensions/654cf23bda74f.jpg',
    alt: 'Great Lengths Extensions – Vorher-Nachher',
  },
];

export default function GreatLengthsHighlight() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Auto-play
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 4000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  // Track selected slide
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi]);

  return (
    <Section background="gray" padding="xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Image Carousel */}
        <AnimatedSection animation="slide-right">
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl group">
            {/* Embla Carousel */}
            <div ref={emblaRef} className="overflow-hidden h-full">
              <div className="flex h-full">
                {extensionImages.map((image) => (
                  <div key={image.src} className="flex-[0_0_100%] min-w-0 relative h-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={scrollPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-70 md:opacity-0 md:group-hover:opacity-100 transition-opacity hover:bg-white"
              aria-label="Vorheriges Bild"
            >
              <ChevronLeft size={20} className="text-secondary-800" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-70 md:opacity-0 md:group-hover:opacity-100 transition-opacity hover:bg-white"
              aria-label="Nächstes Bild"
            >
              <ChevronRight size={20} className="text-secondary-800" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {extensionImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? 'bg-white w-7'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Bild ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Content */}
        <div>
          <AnimatedSection animation="slide-left">
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles size={16} />
              <span>Premium Haarverlängerung</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl text-secondary-900 mb-6">
              Great Lengths Extensions
            </h2>

            <p className="text-lg text-secondary-700 mb-6 leading-relaxed">
              Erleben Sie die weltweit führende Technologie für Haarverlängerungen.
              Mit Great Lengths schaffen wir natürliche, lang anhaltende Ergebnisse,
              die Sie begeistern werden.
            </p>

            <p className="text-secondary-600 mb-8 leading-relaxed">
              Die innovative Keratin-Bonding-Methode sorgt für unsichtbare Verbindungen
              und ein natürliches Tragegefühl. Mit der einzigartigen PIANO Farbpalette
              finden wir die perfekte Farbe für Ihr Haar.
            </p>

            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <AnimatedSection
                  key={feature}
                  animation="slide-left"
                  delay={index * 0.05}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mt-0.5">
                      <Check size={14} className="text-white" />
                    </div>
                    <span className="text-secondary-700">{feature}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/dienstleistungen" variant="primary" size="lg">
                Mehr erfahren
              </Button>
              <Button href="/kontakt" variant="outline" size="lg">
                Beratung vereinbaren
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </Section>
  );
}
