import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Sophisticated Rose Gold
        primary: {
          50: '#fdf8f6',
          100: '#f9ede8',
          200: '#f2d9cd',
          300: '#e8bfaa',
          400: '#da9d7f',
          500: '#ce7f5d', // Main brand color
          600: '#bd6645',
          700: '#9e5138',
          800: '#824533',
          900: '#6b3c2d',
        },
        // Secondary - Warm Neutrals
        secondary: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
        // Accent - Soft Lavender (for relaxation theme)
        accent: {
          50: '#faf7fd',
          100: '#f3eefa',
          200: '#e9def5',
          300: '#d9c4ec',
          400: '#c19fdf',
          500: '#a67cd0',
          600: '#8d5ebc',
          700: '#764ca3',
          800: '#634086',
          900: '#53366d',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        display: ['var(--font-cormorant)', 'serif'],
      },
      fontSize: {
        hero: ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        display: ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
};

export default config;
