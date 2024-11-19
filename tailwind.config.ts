/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A2342',
          light: '#153561',
        },
        gold: {
          DEFAULT: '#B68D40',
          light: '#D4AF37',
        },
      },
      fontFamily: {
        garamond: ['var(--font-garamond)'],
        sans: ['var(--font-opensans)'],
      },
    },
  },
  plugins: [],
}