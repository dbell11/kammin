import { Camera, ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import AnimatedSection from '@/components/ui/AnimatedSection';

// Featured gallery items (placeholders)
const featuredItems = [
  {
    id: 1,
    category: 'Haarschnitt',
    gradient: 'from-primary-300 to-primary-500',
  },
  {
    id: 2,
    category: 'Färbung',
    gradient: 'from-accent-300 to-accent-500',
  },
  {
    id: 3,
    category: 'Extensions',
    gradient: 'from-secondary-300 to-secondary-500',
  },
  {
    id: 4,
    category: 'Styling',
    gradient: 'from-primary-400 to-accent-400',
  },
  {
    id: 5,
    category: 'Kosmetik',
    gradient: 'from-accent-400 to-primary-400',
  },
  {
    id: 6,
    category: 'Make-up',
    gradient: 'from-secondary-400 to-primary-300',
  },
];

export default function GalleryTeaser() {
  return (
    <Section background="white" padding="xl">
      <div className="text-center mb-8 md:mb-16">
        <AnimatedSection animation="fade">
          <h2 className="font-display text-4xl md:text-5xl text-secondary-900 mb-4">
            Unsere Arbeiten
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Lassen Sie sich von unseren Ergebnissen inspirieren – jede Kundin ist einzigartig
          </p>
        </AnimatedSection>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
        {featuredItems.map((item, index) => (
          <AnimatedSection
            key={item.id}
            animation="scale"
            delay={index * 0.1}
          >
            <div className="group relative aspect-[3/4] bg-gradient-to-br rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer">
              {/* Placeholder with gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Camera className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm font-medium opacity-75">{item.category}</p>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <ArrowRight className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection animation="fade" delay={0.6}>
        <div className="text-center">
          <Button href="/galerie" variant="primary" size="lg">
            Zur vollständigen Galerie
          </Button>
        </div>
      </AnimatedSection>
    </Section>
  );
}
