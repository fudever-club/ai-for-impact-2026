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
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      colors: {
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617',
        },
        navy: {
          950: '#090D16',
          900: '#0F172A',
          850: '#1E293B',
          800: '#334155',
          700: '#475569',
          600: '#64748B',
        },
        brand: {
          orange: '#FF6B00',
          'orange-hover': '#EA580C',
          'orange-light': '#FFF7ED',
          'orange-subtle': '#FFEDD5',
          blue: '#2563EB',
          'blue-hover': '#1D4ED8',
          'blue-light': '#EFF6FF',
          indigo: '#4F46E5',
          cyan: '#0284C7',
          teal: '#0D9488',
          offwhite: '#0F172A',
          muted: '#64748B',
          darkmuted: '#94A3B8',
        },
        background: '#FFFFFF',
        foreground: '#0F172A',
        border: 'rgba(226, 232, 240, 0.8)',
      },
      boxShadow: {
        card: '0 2px 10px -2px rgba(15, 23, 42, 0.05), 0 1px 3px -1px rgba(15, 23, 42, 0.03)',
        'card-hover': '0 12px 32px -4px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.04)',
        'glow-orange': '0 8px 24px -4px rgba(255, 107, 0, 0.35)',
        'glow-orange-lg': '0 16px 40px -6px rgba(255, 107, 0, 0.45)',
        'glow-orange-sm': '0 2px 10px -1px rgba(255, 107, 0, 0.25)',
        'glow-blue': '0 8px 24px -4px rgba(37, 99, 235, 0.25)',
        'glow-cyan': '0 8px 24px -4px rgba(2, 132, 199, 0.2)',
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
          '50%': { opacity: '0.85', transform: 'scale(1.06)' },
        },
        pulseGlowOrange: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.08)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        'accordion-up': 'accordion-up 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'pulse-glow-orange': 'pulseGlowOrange 3s ease-in-out infinite',
        float: 'float 5s ease-in-out infinite',
        shimmer: 'shimmer 3s ease-in-out infinite',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'smooth': 'cubic-bezier(0.25, 0.8, 0.25, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;