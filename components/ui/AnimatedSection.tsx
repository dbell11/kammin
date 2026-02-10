'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale';
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fade',
  delay = 0,
}: AnimatedSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    'slide-up': {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    },
    'slide-left': {
      hidden: { opacity: 0, x: 40 },
      visible: { opacity: 1, x: 0 },
    },
    'slide-right': {
      hidden: { opacity: 0, x: -40 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants[animation]}
      transition={{
        duration: 0.6,
        delay,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
