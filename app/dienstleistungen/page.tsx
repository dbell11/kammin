import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import ServiceCard from '@/components/services/ServiceCard';
import Button from '@/components/ui/Button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { SERVICES } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Dienstleistungen | Kamm In - Friseursalon & Kosmetikstudio',
  description: 'Haarschnitte, Färbungen, Great Lengths Extensions und Kosmetik. Professionelle Friseurdienstleistungen in Rheinbach. Individuelle Beratung und höchste Qualität.',
  keywords: 'Haarschnitt Rheinbach, Färbung Rheinbach, Great Lengths Rheinbach, Kosmetik Rheinbach, Friseursalon Dienstleistungen',
};

export default function DienstleistungenPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="primary" padding="xl">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fade">
            <h1 className="font-display text-3xl sm:text-4xl md:text-6xl text-secondary-900 mb-6">
              Unsere Dienstleistungen
            </h1>
            <p className="text-base md:text-xl text-secondary-700 leading-relaxed">
              Von professionellen Haarschnitten über kreative Färbungen bis hin zu
              hochwertigen Extensions – wir bieten Ihnen ein umfassendes Spektrum an
              Beauty-Services in entspannter, luxuriöser Atmosphäre.
            </p>
          </AnimatedSection>
        </div>
      </Section>

      {/* Services Grid */}
      <Section background="white" padding="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              longDescription={service.longDescription}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gray" padding="lg">
        <AnimatedSection animation="fade">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-secondary-900 mb-4">
              Bereit für Ihre Verwandlung?
            </h2>
            <p className="text-lg text-secondary-700 mb-8">
              Lassen Sie sich von uns beraten und vereinbaren Sie Ihren persönlichen Termin
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/kontakt" variant="primary" size="lg">
                Termin vereinbaren
              </Button>
              <Button href="/galerie" variant="outline" size="lg">
                Unsere Arbeiten ansehen
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </>
  );
}
