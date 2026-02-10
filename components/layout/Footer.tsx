import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { BUSINESS_INFO, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand & Mission */}
          <div>
            <h3 className="font-display text-3xl text-primary-400 mb-4">
              {BUSINESS_INFO.name}
            </h3>
            <p className="text-secondary-300 italic mb-4">
              {BUSINESS_INFO.mission}
            </p>
            <p className="text-secondary-400 text-sm">
              {BUSINESS_INFO.fullName}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl mb-4 text-white">
              Schnellzugriff
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl mb-4 text-white">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={BUSINESS_INFO.contact.phoneLink}
                  className="flex items-start space-x-3 text-secondary-300 hover:text-primary-400 transition-colors group"
                >
                  <Phone size={18} className="mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{BUSINESS_INFO.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.contact.mobileLink}
                  className="flex items-start space-x-3 text-secondary-300 hover:text-primary-400 transition-colors group"
                >
                  <Phone size={18} className="mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{BUSINESS_INFO.contact.mobile}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS_INFO.contact.email}`}
                  className="flex items-start space-x-3 text-secondary-300 hover:text-primary-400 transition-colors group"
                >
                  <Mail size={18} className="mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{BUSINESS_INFO.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 text-secondary-300 hover:text-primary-400 transition-colors group"
                >
                  <MapPin size={18} className="mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <div>{BUSINESS_INFO.address.street}</div>
                    <div>
                      {BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city}
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-700 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-secondary-400 text-sm">
            © {currentYear} {BUSINESS_INFO.name}. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/impressum"
              className="text-secondary-400 hover:text-primary-400 transition-colors text-sm"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-secondary-400 hover:text-primary-400 transition-colors text-sm"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
