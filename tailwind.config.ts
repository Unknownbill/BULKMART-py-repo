// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2D5A27',
          50: '#f0f9f0',
          100: '#dcf2dc',
          200: '#bce4bc',
          300: '#8ace8a',
          400: '#56b356',
          500: '#2D5A27',
          600: '#2d5a27',
          700: '#285123',
          800: '#23431f',
          900: '#1e371b',
        },
        secondary: {
          DEFAULT: '#FF6B35',
          50: '#fff5ed',
          100: '#ffe9d4',
          200: '#ffcea8',
          300: '#ffab71',
          400: '#FF6B35',
          500: '#fe4910',
          600: '#ef2f06',
          700: '#c61f07',
          800: '#9d1b0e',
          900: '#7e1a0f',
        }
      },
      fontFamily: {
        heading: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Open Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;