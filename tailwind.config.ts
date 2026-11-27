import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0A192F', light: '#132A4A', dark: '#061020' },
        crimson: { DEFAULT: '#C8102E', dark: '#A00D24', light: '#FDE8EB' },
        gold: { DEFAULT: '#C59B27', light: '#FBF5E6' },
        ivory: '#F8F7F4',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
