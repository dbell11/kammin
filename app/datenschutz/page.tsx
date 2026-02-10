import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Datenschutz | Kamm In - Friseursalon & Kosmetikstudio',
  description: 'Datenschutzerklärung von Kamm In - Ihr Friseursalon & Kosmetikstudio in Rheinbach.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function DatenschutzPage() {
  return (
    <>
      <Section background="gray" padding="xl">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection animation="fade">
            <h1 className="font-display text-5xl md:text-6xl text-secondary-900 mb-8">
              Datenschutzerklärung
            </h1>

            <Card className="prose prose-lg max-w-none">
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-2xl text-secondary-900 mb-4">
                    1. Datenschutz auf einen Blick
                  </h2>

                  <h3 className="font-medium text-secondary-900 mb-2">
                    Allgemeine Hinweise
                  </h3>
                  <p className="text-secondary-700 text-sm">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was
                    mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
                    besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                    persönlich identifiziert werden können.
                  </p>

                  <h3 className="font-medium text-secondary-900 mt-4 mb-2">
                    Datenerfassung auf dieser Website
                  </h3>
                  <p className="text-secondary-700 text-sm">
                    <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
                    Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                  </p>
                </div>

                <div className="pt-6 border-t border-secondary-200">
                  <h2 className="font-serif text-2xl text-secondary-900 mb-4">
                    2. Hosting und Content Delivery Networks (CDN)
                  </h2>

                  <h3 className="font-medium text-secondary-900 mb-2">
                    Externes Hosting
                  </h3>
                  <p className="text-secondary-700 text-sm">
                    Diese Website wird bei einem externen Dienstleister gehostet (Hoster).
                    Die personenbezogenen Daten, die auf dieser Website erfasst werden,
                    werden auf den Servern des Hosters gespeichert. Hierbei kann es sich
                    v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
                    Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten,
                    die über eine Website generiert werden, handeln.
                  </p>
                </div>

                <div className="pt-6 border-t border-secondary-200">
                  <h2 className="font-serif text-2xl text-secondary-900 mb-4">
                    3. Allgemeine Hinweise und Pflichtinformationen
                  </h2>

                  <h3 className="font-medium text-secondary-900 mb-2">Datenschutz</h3>
                  <p className="text-secondary-700 text-sm">
                    Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln
                    Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
                    Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                  </p>

                  <h3 className="font-medium text-secondary-900 mt-4 mb-2">
                    Hinweis zur verantwortlichen Stelle
                  </h3>
                  <p className="text-secondary-700 text-sm">
                    Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                  </p>
                  <p className="text-secondary-700 text-sm mt-2">
                    {BUSINESS_INFO.owner}<br />
                    {BUSINESS_INFO.address.street}<br />
                    {BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city}<br />
                    Telefon: {BUSINESS_INFO.contact.phone}<br />
                    E-Mail: {BUSINESS_INFO.contact.email}
                  </p>
                </div>

                <div className="pt-6 border-t border-secondary-200">
                  <h2 className="font-serif text-2xl text-secondary-900 mb-4">
                    4. Datenerfassung auf dieser Website
                  </h2>

                  <h3 className="font-medium text-secondary-900 mb-2">
                    Kontaktformular
                  </h3>
                  <p className="text-secondary-700 text-sm">
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
                    Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen
                    Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
                    Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne
                    Ihre Einwilligung weiter.
                  </p>
                  <p className="text-secondary-700 text-sm mt-2">
                    Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
                    lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
                    zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
                    erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf
                    unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
                    gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
                    Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
                  </p>
                </div>

                <div className="pt-6 border-t border-secondary-200">
                  <h2 className="font-serif text-2xl text-secondary-900 mb-4">
                    5. Ihre Rechte
                  </h2>

                  <p className="text-secondary-700 text-sm">
                    Sie haben jederzeit das Recht:
                  </p>
                  <ul className="text-secondary-700 text-sm list-disc list-inside space-y-1 mt-2">
                    <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten</li>
                    <li>Berichtigung unrichtiger Daten zu verlangen</li>
                    <li>Löschung Ihrer Daten zu verlangen</li>
                    <li>Einschränkung der Datenverarbeitung zu verlangen</li>
                    <li>Widerspruch gegen die Verarbeitung Ihrer Daten einzulegen</li>
                    <li>Datenübertragbarkeit zu verlangen</li>
                  </ul>
                  <p className="text-secondary-700 text-sm mt-4">
                    Zur Ausübung dieser Rechte wenden Sie sich bitte an die im Impressum
                    angegebenen Kontaktdaten.
                  </p>
                </div>

                <div className="pt-6 border-t border-secondary-200">
                  <p className="text-secondary-600 text-xs">
                    Stand: Februar 2026<br />
                    Diese Datenschutzerklärung ist eine Basis-Version. Für eine vollständige,
                    rechtssichere Datenschutzerklärung empfehlen wir die Konsultation eines
                    Rechtsanwalts oder die Nutzung eines Datenschutz-Generators.
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
