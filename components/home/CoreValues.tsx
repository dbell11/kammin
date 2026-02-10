import { Award, Sparkles, Heart } from 'lucide-react';
import Section from '@/components/ui/Section';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { CORE_VALUES } from '@/lib/constants';

const iconMap = {
  award: Award,
  sparkles: Sparkles,
  heart: Heart,
};

export default function CoreValues() {
  return (
    <Section background="primary" padding="xl">
      <div className="text-center mb-16">
        <AnimatedSection animation="fade">
          <h2 className="font-display text-4xl md:text-5xl text-secondary-900 mb-4">
            Unsere Werte
          </h2>
          <p className="text-lg text-secondary-700 max-w-2xl mx-auto">
            Was uns auszeichnet und warum Kunden zu uns kommen
          </p>
        </AnimatedSection>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {CORE_VALUES.map((value, index) => {
          const Icon = iconMap[value.icon as keyof typeof iconMap];
          return (
            <AnimatedSection
              key={value.title}
              animation="slide-up"
              delay={index * 0.15}
            >
              <div className="text-center">
                <div className="inline-flex w-20 h-20 bg-white rounded-full items-center justify-center mb-6 shadow-lg">
                  <Icon className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="font-serif text-2xl text-secondary-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-secondary-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </Section>
  );
}
