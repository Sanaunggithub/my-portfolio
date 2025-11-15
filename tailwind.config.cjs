/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-start': '#0a0118',
        'brand-end': '#1a0b2e',
          accent: '#64c8ff',
          'accent-2': '#a78bfa',
      },
    },
  },
  plugins: [],
};
