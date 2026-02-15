'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
import { motion } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-4'
          : 'bg-white/80 backdrop-blur-sm py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 group"
          >
            <img
              src="/kammin-logo.svg"
              alt="Kamm In Logo"
              className="w-12 h-12 object-contain transition-transform group-hover:scale-105"
            />
            <span className="font-display text-2xl md:text-3xl text-primary-500 transition-colors group-hover:text-primary-600">
              Kamm In
            </span>
          </Link>

          {/* Desktop Navigation */}
          <Navigation />

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </motion.header>
  );
}
