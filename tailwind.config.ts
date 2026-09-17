import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      colors: {
        navy: {
          950: '#030D1D',
          900: '#061A3A',
          850: '#09224A',
          800: '#0B2A5B',
          700: '#113A78',
          600: '#184C9C',
        },
        brand: {
          blue: '#1D8CFF',
          cyan: '#56C7FF',
          orange: '#F37021',
          'orange-hover': '#FF8038',
          offwhite: '#F8FAFC',
          muted: '#B5C4D8',
          darkmuted: '#5B6F8E',
        },
        background: '#061A3A',
        foreground: '#F8FAFC',
        border: 'rgba(29, 140, 255, 0.15)',
      },
      boxShadow: {
        'glow-blue': '0 0 30px -5px rgba(29, 140, 255, 0.35)',
        'glow-orange': '0 0 30px -5px rgba(243, 112, 33, 0.4)',
        'glow-cyan': '0 0 25px -5px rgba(86, 199, 255, 0.3)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0', opacity: '0' },
          to: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
          to: { height: '0', opacity: '0' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        'accordion-up': 'accordion-up 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;