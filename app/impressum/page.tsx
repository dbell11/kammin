import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Impressum | Kamm In - Friseursalon & Kosmetikstudio',
  description: 'Impressum und rechtliche Angaben von Kamm In - Ihr Friseursalon & Kosmetikstudio in Rheinbach.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function ImpressumPage() {
  return (
    <>
      <Section background="gray" padding="xl">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection animation="fade">
            <h1 className="font-display text-5xl md:text-6xl text-secondary-900 mb-8">
              Impressum
            </h1>

            <Card className="prose prose-lg max-w-none">
              <h2 className="font-serif text-2xl text-secondary-900 mb-4">
                Angaben gemäß § 5 TMG
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-secondary-900 mb-2">
                    {BUSINESS_INFO.fullName}
                  </h3>
                  <p className="text-secondary-700">
                    Inhaberin: {BUSINESS_INFO.owner}
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-secondary-900 mb-2">Anschrift</h3>
                  <p className="text-secondary-700">
                    {BUSINESS_INFO.address.street}<br />
                    {BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city}<br />
                    {BUSINESS_INFO.address.country}
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-secondary-900 mb-2">Kontakt</h3>
                  <p className="text-secondary-700">
                    Telefon: <a href={BUSINESS_INFO.contact.phoneLink} className="text-primary-600 hover:text-primary-700">{BUSINESS_INFO.contact.phone}</a><br />
                    Mobil: <a href={BUSINESS_INFO.contact.mobileLink} className="text-primary-600 hover:text-primary-700">{BUSINESS_INFO.contact.mobile}</a><br />
                    E-Mail: <a href={`mailto:${BUSINESS_INFO.contact.email}`} className="text-primary-600 hover:text-primary-700">{BUSINESS_INFO.contact.email}</a>
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-secondary-900 mb-2">
                    Umsatzsteuer-Identifikationsnummer
                  </h3>
                  <p className="text-secondary-700">
                    Gemäß §27 a Umsatzsteuergesetz:<br />
                    [Bitte ergänzen Sie hier Ihre USt-IdNr., falls vorhanden]
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-secondary-900 mb-2">
                    Verantwortlich für den Inhalt
                  </h3>
                  <p className="text-secondary-700">
                    {BUSINESS_INFO.owner}<br />
                    {BUSINESS_INFO.address.street}<br />
                    {BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city}
                  </p>
                </div>

                <div className="pt-6 border-t border-secondary-200">
                  <h3 className="font-medium text-secondary-900 mb-2">
                    Haftungsausschluss
                  </h3>

                  <h4 className="font-medium text-secondary-900 mt-4 mb-2">
                    Haftung für Inhalte
                  </h4>
                  <p className="text-secondary-700 text-sm">
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
                    Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                    können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind
                    wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                    allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
                    als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                    gespeicherte fremde Informationen zu überwachen.
                  </p>

                  <h4 className="font-medium text-secondary-900 mt-4 mb-2">
                    Haftung für Links
                  </h4>
                  <p className="text-secondary-700 text-sm">
                    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
                    Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
                    fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                    verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
                    Seiten verantwortlich.
                  </p>

                  <h4 className="font-medium text-secondary-900 mt-4 mb-2">Urheberrecht</h4>
                  <p className="text-secondary-700 text-sm">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
                    Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
                    Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                    Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
                    jeweiligen Autors bzw. Erstellers.
                  </p>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </Section>
    </>
  );
}
