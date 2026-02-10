import { Sparkles, Check } from 'lucide-react';
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

export default function GreatLengthsHighlight() {
  return (
    <Section background="gray" padding="xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Placeholder */}
        <AnimatedSection animation="slide-right">
          <div className="relative aspect-[4/5] bg-gradient-to-br from-primary-200 to-accent-200 rounded-lg overflow-hidden shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <Sparkles className="w-24 h-24 text-white mx-auto mb-4 opacity-50" />
                <p className="text-white text-lg font-medium">
                  Great Lengths Extensions
                  <br />
                  <span className="text-sm opacity-75">Bild-Platzhalter</span>
                </p>
              </div>
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
