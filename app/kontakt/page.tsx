import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import ContactForm from '@/components/contact/ContactForm';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Kontakt | Kamm In - Friseursalon & Kosmetikstudio',
  description: 'Kontaktieren Sie uns für einen Termin. Telefon: 0 22 26 - 900 488 oder Mobil: 0 163 30 51 467. Weiherstraße 21, 53359 Rheinbach.',
  keywords: 'Friseur Rheinbach Kontakt, Termin Friseursalon Rheinbach, Kamm In Kontakt',
};

const contactInfo = [
  {
    icon: Phone,
    label: 'Telefon',
    value: BUSINESS_INFO.contact.phone,
    link: BUSINESS_INFO.contact.phoneLink,
    description: 'Rufen Sie uns an',
  },
  {
    icon: Phone,
    label: 'Mobil',
    value: BUSINESS_INFO.contact.mobile,
    link: BUSINESS_INFO.contact.mobileLink,
    description: 'Auch mobil erreichbar',
  },
  {
    icon: Mail,
    label: 'E-Mail',
    value: BUSINESS_INFO.contact.email,
    link: `mailto:${BUSINESS_INFO.contact.email}`,
    description: 'Schreiben Sie uns',
  },
  {
    icon: Clock,
    label: 'Öffnungszeiten',
    value: BUSINESS_INFO.hours.type,
    description: BUSINESS_INFO.hours.note,
  },
];

export default function KontaktPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="primary" padding="xl">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fade">
            <h1 className="font-display text-5xl md:text-6xl text-secondary-900 mb-6">
              Kontakt
            </h1>
            <p className="text-xl text-secondary-700 leading-relaxed">
              Wir freuen uns auf Ihre Anfrage. Kontaktieren Sie uns telefonisch
              oder nutzen Sie unser Kontaktformular.
            </p>
          </AnimatedSection>
        </div>
      </Section>

      {/* Contact Methods */}
      <Section background="white" padding="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const content = (
              <Card hover className="h-full text-center">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="font-serif text-lg text-secondary-900 mb-2">
                    {info.label}
                  </h3>
                  <p className="text-secondary-700 font-medium mb-1">
                    {info.value}
                  </p>
                  {info.description && (
                    <p className="text-secondary-500 text-sm">
                      {info.description}
                    </p>
                  )}
                </div>
              </Card>
            );

            return (
              <AnimatedSection
                key={info.label}
                animation="slide-up"
                delay={index * 0.1}
              >
                {info.link ? (
                  <a href={info.link} className="block h-full">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </AnimatedSection>
            );
          })}
        </div>

        {/* Form & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedSection animation="slide-right">
            <div>
              <h2 className="font-serif text-3xl text-secondary-900 mb-4">
                Schreiben Sie uns
              </h2>
              <p className="text-secondary-600 mb-6">
                Nutzen Sie unser Kontaktformular für Ihre Anfrage. Wir melden uns
                schnellstmöglich bei Ihnen zurück.
              </p>
              <Card>
                <ContactForm />
              </Card>
            </div>
          </AnimatedSection>

          {/* Map & Address */}
          <AnimatedSection animation="slide-left">
            <div>
              <h2 className="font-serif text-3xl text-secondary-900 mb-4">
                Besuchen Sie uns
              </h2>
              <p className="text-secondary-600 mb-6">
                Unser Salon befindet sich im Herzen von Rheinbach. Wir freuen uns
                auf Ihren Besuch!
              </p>

              {/* Address Card */}
              <Card className="mb-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl text-secondary-900 mb-2">
                      {BUSINESS_INFO.fullName}
                    </h3>
                    <p className="text-secondary-700">
                      {BUSINESS_INFO.address.street}<br />
                      {BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city}<br />
                      {BUSINESS_INFO.address.country}
                    </p>
                    <a
                      href={BUSINESS_INFO.address.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-primary-600 hover:text-primary-700 font-medium"
                    >
                      In Google Maps öffnen →
                    </a>
                  </div>
                </div>
              </Card>

              {/* Map Placeholder */}
              <div className="aspect-video bg-secondary-200 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.5!2d6.9484!3d50.6247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDM3JzI5LjAiTiA2wrA1Nic1NC4yIkU!5e0!3m2!1sde!2sde!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kamm In Standort"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>
    </>
  );
}
