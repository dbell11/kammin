import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { BUSINESS_INFO } from '@/lib/constants';

const contactMethods = [
  {
    icon: Phone,
    label: 'Telefon',
    value: BUSINESS_INFO.contact.phone,
    link: BUSINESS_INFO.contact.phoneLink,
  },
  {
    icon: Phone,
    label: 'Mobil',
    value: BUSINESS_INFO.contact.mobile,
    link: BUSINESS_INFO.contact.mobileLink,
  },
  {
    icon: MapPin,
    label: 'Adresse',
    value: `${BUSINESS_INFO.address.street}, ${BUSINESS_INFO.address.postalCode} ${BUSINESS_INFO.address.city}`,
    link: BUSINESS_INFO.address.mapUrl,
  },
  {
    icon: Clock,
    label: 'Öffnungszeiten',
    value: BUSINESS_INFO.hours.type,
    link: null,
  },
];

export default function ContactCTA() {
  return (
    <Section background="gray" padding="xl">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Call to Action */}
          <div>
            <AnimatedSection animation="slide-right">
              <h2 className="font-display text-4xl md:text-5xl text-secondary-900 mb-6">
                Vereinbaren Sie Ihren Termin
              </h2>

              <p className="text-lg text-secondary-700 mb-6 leading-relaxed">
                Wir nehmen uns Zeit für Sie und Ihre Wünsche. Kontaktieren Sie uns
                telefonisch oder besuchen Sie uns direkt in unserem Salon in Rheinbach.
              </p>

              <p className="text-secondary-600 mb-8 italic">
                {BUSINESS_INFO.hours.note}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  href={BUSINESS_INFO.contact.phoneLink}
                  variant="primary"
                  size="lg"
                  className="inline-flex items-center space-x-2"
                >
                  <Phone size={20} />
                  <span>Jetzt anrufen</span>
                </Button>
                <Button href="/kontakt" variant="outline" size="lg">
                  Kontaktformular
                </Button>
              </div>
            </AnimatedSection>
          </div>

          {/* Contact Information */}
          <div>
            <AnimatedSection animation="slide-left">
              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="font-serif text-2xl text-secondary-900 mb-6">
                  Kontaktinformationen
                </h3>

                <div className="space-y-6">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon;
                    const content = (
                      <div className="flex items-start space-x-4 group">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                          <Icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-secondary-500 mb-1">
                            {method.label}
                          </p>
                          <p className="text-secondary-900 font-medium">
                            {method.value}
                          </p>
                        </div>
                      </div>
                    );

                    return (
                      <AnimatedSection
                        key={method.label}
                        animation="slide-left"
                        delay={index * 0.1}
                      >
                        {method.link ? (
                          <a
                            href={method.link}
                            target={method.icon === MapPin ? '_blank' : undefined}
                            rel={method.icon === MapPin ? 'noopener noreferrer' : undefined}
                            className="block hover:scale-105 transition-transform"
                          >
                            {content}
                          </a>
                        ) : (
                          content
                        )}
                      </AnimatedSection>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </Section>
  );
}
