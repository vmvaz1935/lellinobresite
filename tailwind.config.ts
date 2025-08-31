import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './styles/**/*.{css,ts}'
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        brand: {
          primary: {
            50: 'var(--brand-primary-50)',
            100: 'var(--brand-primary-100)',
            200: 'var(--brand-primary-200)',
            300: 'var(--brand-primary-300)',
            400: 'var(--brand-primary-400)',
            500: 'var(--brand-primary-500)',
            600: 'var(--brand-primary-600)',
            700: 'var(--brand-primary-700)',
            800: 'var(--brand-primary-800)',
            900: 'var(--brand-primary-900)',
          },
          accent: {
            50: 'var(--brand-accent-50)',
            100: 'var(--brand-accent-100)',
            200: 'var(--brand-accent-200)',
            300: 'var(--brand-accent-300)',
            400: 'var(--brand-accent-400)',
            500: 'var(--brand-accent-500)',
            600: 'var(--brand-accent-600)',
            700: 'var(--brand-accent-700)',
            800: 'var(--brand-accent-800)',
            900: 'var(--brand-accent-900)',
          },
          secondary: {
            50: 'var(--brand-secondary-50)',
            100: 'var(--brand-secondary-100)',
            200: 'var(--brand-secondary-200)',
            300: 'var(--brand-secondary-300)',
            400: 'var(--brand-secondary-400)',
            500: 'var(--brand-secondary-500)',
            600: 'var(--brand-secondary-600)',
            700: 'var(--brand-secondary-700)',
            800: 'var(--brand-secondary-800)',
            900: 'var(--brand-secondary-900)',
          },
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          'on-primary': 'var(--text-on-primary)',
          'on-accent': 'var(--text-on-accent)',
          'on-secondary': 'var(--text-on-secondary)',
        },
        bg: {
          default: 'var(--bg-default)',
          muted: 'var(--bg-muted)',
          inverse: 'var(--bg-inverse)',
        },
      },
      fontFamily: {
        sans: ['Avenir', 'Arial', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(0,0,0,0.05)',
      },
      borderRadius: {
        lg: '0.75rem',
        xl: '1rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

export default config;