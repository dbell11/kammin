'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white z-50 shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-secondary-200">
                  <span className="font-display text-2xl text-primary-500">
                    Kamm In
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-secondary-700 hover:text-primary-500 transition-colors p-2"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto py-6">
                  {NAV_LINKS.map((link, index) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={link.href}
                          className={`block px-6 py-4 text-lg font-medium transition-colors ${
                            isActive
                              ? 'text-primary-600 bg-primary-50 border-l-4 border-primary-500'
                              : 'text-secondary-700 hover:text-primary-500 hover:bg-secondary-50'
                          }`}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
