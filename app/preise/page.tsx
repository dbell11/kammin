import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Euro, Info } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Preise | Kamm In - Friseursalon & Kosmetikstudio',
  description: 'Transparente Preise für Haarschnitte, Färbungen, Extensions und Kosmetik. Termine nach Vereinbarung in Rheinbach.',
  keywords: 'Friseur Preise Rheinbach, Haarschnitt Kosten, Extensions Preise, Great Lengths Preise',
};

const priceCategories = [
  {
    title: 'Haarschnitte',
    items: [
      { service: 'Damenschnitt', price: 'ab 45 €' },
      { service: 'Damenschnitt mit Waschen & Föhnen', price: 'ab 55 €' },
      { service: 'Herrenschnitt', price: 'ab 30 €' },
      { service: 'Kinderschnitt (bis 12 Jahre)', price: 'ab 20 €' },
      { service: 'Pony schneiden', price: 'ab 10 €' },
    ],
  },
  {
    title: 'Färbungen & Strähnen',
    items: [
      { service: 'Ansatzfärbung', price: 'ab 45 €' },
      { service: 'Komplettfärbung', price: 'ab 65 €' },
      { service: 'Strähnen (Foliensträhnen)', price: 'ab 55 €' },
      { service: 'Balayage / Ombré', price: 'ab 85 €' },
      { service: 'Intensivtönung', price: 'ab 40 €' },
    ],
  },
  {
    title: 'Styling & Pflege',
    items: [
      { service: 'Waschen & Föhnen (kurz)', price: 'ab 25 €' },
      { service: 'Waschen & Föhnen (lang)', price: 'ab 35 €' },
      { service: 'Hochsteckfrisur', price: 'ab 55 €' },
      { service: 'Intensive Haarkur', price: 'ab 15 €' },
    ],
  },
  {
    title: 'Great Lengths Extensions',
    items: [
      { service: 'Kostenlose Beratung', price: 'Kostenfrei' },
      { service: 'Extensions (Preis nach Beratung)', price: 'auf Anfrage' },
      { service: 'Haarverlängerung', price: 'ab 350 €' },
      { service: 'Haarverdichtung', price: 'ab 250 €' },
      { service: 'Extensions entfernen', price: 'ab 80 €' },
    ],
  },
  {
    title: 'Kosmetik',
    items: [
      { service: 'Gesichtsbehandlung', price: 'ab 50 €' },
      { service: 'Make-up', price: 'ab 40 €' },
      { service: 'Wimpernfärben', price: 'ab 15 €' },
      { service: 'Augenbrauenfärben', price: 'ab 12 €' },
    ],
  },
];

export default function PreisePage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="primary" padding="xl">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fade">
            <Euro className="w-16 h-16 text-primary-600 mx-auto mb-6" />
            <h1 className="font-display text-5xl md:text-6xl text-secondary-900 mb-6">
              Unsere Preise
            </h1>
            <p className="text-xl text-secondary-700 leading-relaxed">
              Transparente Preise für höchste Qualität. Alle Preise verstehen sich
              inklusive Mehrwertsteuer.
            </p>
          </AnimatedSection>
        </div>
      </Section>

      {/* Info Box */}
      <Section background="white" padding="md">
        <AnimatedSection animation="slide-up">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-accent-50 border-2 border-accent-200">
              <div className="flex items-start space-x-4">
                <Info className="w-6 h-6 text-accent-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-lg text-secondary-900 mb-2">
                    Wichtige Hinweise
                  </h3>
                  <ul className="text-secondary-700 space-y-1 text-sm">
                    <li>• Alle Preise sind Startpreise und können je nach Aufwand variieren</li>
                    <li>• Termine nach Vereinbarung – rufen Sie uns gerne an</li>
                    <li>• Individuelle Beratung ist bei uns selbstverständlich</li>
                    <li>• Für Extensions empfehlen wir eine persönliche Beratung</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </AnimatedSection>
      </Section>

      {/* Price Lists */}
      <Section background="gray" padding="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {priceCategories.map((category, categoryIndex) => (
            <AnimatedSection
              key={category.title}
              animation="slide-up"
              delay={categoryIndex * 0.1}
            >
              <Card className="h-full">
                <h2 className="font-serif text-2xl text-secondary-900 mb-6 pb-4 border-b-2 border-primary-200">
                  {category.title}
                </h2>
                <div className="space-y-3">
                  {category.items.map((item) => (
                    <div
                      key={item.service}
                      className="flex justify-between items-start gap-4"
                    >
                      <span className="text-secondary-700 flex-1">
                        {item.service}
                      </span>
                      <span className="font-medium text-primary-600 whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="white" padding="lg">
        <AnimatedSection animation="fade">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-secondary-900 mb-4">
              Fragen zu unseren Preisen?
            </h2>
            <p className="text-lg text-secondary-700 mb-8">
              Kontaktieren Sie uns für eine individuelle Beratung und ein persönliches Angebot
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/kontakt" variant="primary" size="lg">
                Termin vereinbaren
              </Button>
              <Button href="/dienstleistungen" variant="outline" size="lg">
                Dienstleistungen ansehen
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </>
  );
}
