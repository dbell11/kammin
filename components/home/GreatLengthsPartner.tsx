'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Award, CheckCircle } from 'lucide-react';

const systems = ['GL PreBonded', 'GL Tapes', 'GL Weft', 'Linea'];

export default function GreatLengthsPartner() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-r from-[#6B2FA0] via-[#7B3FB0] to-[#6B2FA0] py-16 md:py-20">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 text-white/5">
          <svg viewBox="0 0 200 200" className="w-full h-full fill-current">
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" fontSize="180" fontFamily="serif" fontStyle="italic">
              GL
            </text>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
        >
          {/* Left: Great Lengths Branding */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-white/70 text-sm uppercase tracking-widest mb-3"
            >
              Offizieller Partner
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display text-5xl md:text-6xl text-white italic mb-4"
            >
              Great Lengths
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-white/80 text-lg max-w-lg mx-auto lg:mx-0 mb-6"
            >
              Als zertifizierter Great Lengths Partner bieten wir Ihnen die weltweit
              führende Technologie für natürliche Haarverlängerungen und -verdichtungen.
            </motion.p>

            {/* Systems */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6"
            >
              {systems.map((system) => (
                <span
                  key={system}
                  className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full border border-white/20"
                >
                  <CheckCircle size={14} className="text-white/70" />
                  {system}
                </span>
              ))}
            </motion.div>

            {/* CTA Link */}
            <motion.a
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              href="https://www.greatlengthspartner.com/partner/kamm-in-rheinbach"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-medium hover:text-white/80 transition-colors group"
            >
              <span className="border-b border-white/50 group-hover:border-white/80 pb-0.5">
                Partner-Profil ansehen
              </span>
              <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          </div>

          {/* Right: Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6, type: 'spring' }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-2xl scale-125" />

              {/* Badge */}
              <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full border-4 border-amber-600/80 bg-gradient-to-br from-amber-700 via-amber-600 to-amber-800 flex flex-col items-center justify-center shadow-2xl">
                {/* Inner Ring */}
                <div className="absolute inset-2 rounded-full border-2 border-amber-500/40" />

                <Award size={28} className="text-amber-200 mb-1" />
                <span className="text-white font-bold text-xl md:text-2xl uppercase tracking-wide">
                  Bronze
                </span>
                <span className="text-amber-200 font-medium text-sm uppercase tracking-widest">
                  Partner
                </span>
                <span className="text-white font-bold text-2xl md:text-3xl mt-0.5">
                  2026
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Master Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-10 flex justify-center lg:justify-start"
        >
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/15">
            <Award size={20} className="text-amber-400" />
            <span className="text-white/90 text-sm font-medium">
              Master of Great Lengths – Zertifizierte Expertise
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
