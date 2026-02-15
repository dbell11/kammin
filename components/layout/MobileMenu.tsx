'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Home, Scissors, Camera, Euro, Mail, Phone, MapPin } from 'lucide-react';
import { NAV_LINKS, BUSINESS_INFO } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';

const navIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  '/': Home,
  '/dienstleistungen': Scissors,
  '/galerie': Camera,
  '/preise': Euro,
  '/kontakt': Mail,
};

function MobileMenuOverlay({ onClose }: { onClose: () => void }) {
  const pathname = usePathname();

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 z-[60]"
      />

      {/* Menu Panel */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-white z-[70] shadow-2xl flex flex-col"
      >
        {/* Header */}
        <div className="flex-shrink-0 flex items-center justify-between p-4 border-b border-secondary-200">
          <div className="flex items-center space-x-3">
            <img
              src="/kammin-logo.svg"
              alt="Kamm In Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="font-display text-2xl text-primary-500">
              Kamm In
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-secondary-700 hover:text-primary-500 transition-colors p-2"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 min-h-0 overflow-y-auto py-4">
          {NAV_LINKS.map((link, index) => {
            const isActive = pathname === link.href;
            const Icon = navIcons[link.href] || Home;
            return (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-3 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? 'text-primary-600 bg-primary-50 border-l-4 border-primary-500 pl-5 pr-6'
                      : 'text-secondary-700 hover:text-primary-500 hover:bg-secondary-50 pl-6 pr-6'
                  }`}
                >
                  <Icon size={20} className={isActive ? 'text-primary-500' : 'text-secondary-400'} />
                  {link.label}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* Contact & CTA */}
        <div className="flex-shrink-0 border-t border-secondary-200 p-4 space-y-4">
          <div className="space-y-2">
            <a
              href={BUSINESS_INFO.contact.phoneLink}
              className="flex items-center gap-3 text-sm text-secondary-600 hover:text-primary-500 transition-colors"
            >
              <Phone size={16} className="text-secondary-400 flex-shrink-0" />
              <span>{BUSINESS_INFO.contact.phone}</span>
            </a>
            <a
              href={BUSINESS_INFO.address.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-sm text-secondary-600 hover:text-primary-500 transition-colors"
            >
              <MapPin size={16} className="text-secondary-400 flex-shrink-0 mt-0.5" />
              <span>{BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.postalCode} {BUSINESS_INFO.address.city}</span>
            </a>
          </div>

          <a
            href={BUSINESS_INFO.contact.phoneLink}
            className="flex items-center justify-center gap-2 w-full bg-primary-500 text-white font-medium py-3 rounded-md hover:bg-primary-600 transition-colors"
          >
            <Phone size={18} />
            <span>Jetzt anrufen</span>
          </a>
        </div>
      </motion.div>
    </>
  );
}

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Wait for client mount (portal needs document.body)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-secondary-700 hover:text-primary-500 transition-colors p-2"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {isOpen && <MobileMenuOverlay onClose={() => setIsOpen(false)} />}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
}
