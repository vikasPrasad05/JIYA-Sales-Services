/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        industrial: {
          50: '#f4f6f8',
          100: '#e5e9ee',
          200: '#cdd6e1',
          300: '#a7b9cc',
          400: '#7a96b3',
          500: '#58779b',
          600: '#435e7f',
          700: '#374c67',
          800: '#1e293b', // Primary dark slate
          900: '#0f172a', // Deep navy black
          950: '#090d16',
        },
        brand: {
          blue: '#0B3C5D',   // Deep Industrial Navy
          steel: '#328CC1',  // Steel Accent Blue
          amber: '#D97706',  // Industrial Safety Gold / Amber
          dark: '#1D2731',   // Charcoal Black
          gray: '#F4F5F7',   // Surface Neutral
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Outfit', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
