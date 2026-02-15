'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { BUSINESS_INFO } from '@/lib/constants';
import { Phone } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Brand Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-hero text-primary-500 mb-6">
              {BUSINESS_INFO.name}
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-serif text-xl sm:text-2xl md:text-3xl text-secondary-700 mb-4">
              {BUSINESS_INFO.fullName.split(' - ')[1]}
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="font-serif text-xl sm:text-2xl md:text-4xl text-secondary-800 italic mb-8 text-shadow-soft">
              "{BUSINESS_INFO.mission}"
            </p>
            <p className="text-base md:text-lg text-secondary-600 mb-12">
              – {BUSINESS_INFO.owner}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button href="/kontakt" size="lg" variant="primary">
              Termin vereinbaren
            </Button>
            <Button
              href={BUSINESS_INFO.contact.phoneLink}
              size="lg"
              variant="outline"
              className="inline-flex items-center space-x-2"
            >
              <Phone size={20} />
              <span>Jetzt anrufen</span>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16"
          >
            <div className="flex flex-col items-center">
              <p className="text-secondary-500 text-sm mb-2">Entdecken Sie mehr</p>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-6 h-10 border-2 border-primary-400 rounded-full flex items-start justify-center p-2"
              >
                <div className="w-1 h-2 bg-primary-500 rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
