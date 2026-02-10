import { Scissors, Palette, Sparkles, Heart } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import AnimatedSection from '@/components/ui/AnimatedSection';

const iconMap = {
  scissors: Scissors,
  palette: Palette,
  sparkles: Sparkles,
  heart: Heart,
};

const services = [
  {
    id: 'haircuts',
    title: 'Haarschnitte & Styling',
    description: 'Individuelle Schnitte für jeden Typ - vom klassischen Schnitt bis zum modernen Style',
    icon: 'scissors' as keyof typeof iconMap,
  },
  {
    id: 'color',
    title: 'Farben & Strähnen',
    description: 'Professionelle Färbetechniken mit hochwertigen Produkten für natürliche oder kreative Looks',
    icon: 'palette' as keyof typeof iconMap,
  },
  {
    id: 'extensions',
    title: 'Great Lengths Extensions',
    description: 'Keratin-Bonding für natürliche Haarverlängerung mit der PIANO Farbpalette',
    icon: 'sparkles' as keyof typeof iconMap,
  },
  {
    id: 'cosmetics',
    title: 'Kosmetik & Pflege',
    description: 'Gesichtsbehandlungen und professionelles Make-up für besondere Anlässe',
    icon: 'heart' as keyof typeof iconMap,
  },
];

export default function ServicesPreview() {
  return (
    <Section background="white" padding="xl">
      <div className="text-center mb-16">
        <AnimatedSection animation="fade">
          <h2 className="font-display text-4xl md:text-5xl text-secondary-900 mb-4">
            Unsere Dienstleistungen
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Von Haarschnitten über Färbungen bis hin zu Extensions – wir bieten professionelle Beauty-Services
            in entspannter Atmosphäre
          </p>
        </AnimatedSection>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon];
          return (
            <AnimatedSection
              key={service.id}
              animation="slide-up"
              delay={index * 0.1}
            >
              <Card hover className="h-full flex flex-col">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="font-serif text-xl text-secondary-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-secondary-600 mb-4 flex-grow">
                    {service.description}
                  </p>
                </div>
              </Card>
            </AnimatedSection>
          );
        })}
      </div>

      <AnimatedSection animation="fade" delay={0.4}>
        <div className="text-center mt-12">
          <Button href="/dienstleistungen" variant="primary" size="lg">
            Alle Dienstleistungen ansehen
          </Button>
        </div>
      </AnimatedSection>
    </Section>
  );
}
