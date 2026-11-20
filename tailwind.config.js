/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: '#FDFCFA',
          100: '#FAF5EC', // Warm Royal Ivory Parchment
          200: '#F3EAE0', // Soft Sand Cream
          300: '#EBDDCE',
          400: '#DECABB',
          card: '#FAF5EC',
        },
        royalemerald: {
          DEFAULT: '#133B32', // Deep Royal Emerald
          dark: '#0A201B',
          deepest: '#0E241F', // Desktop Backdrop
          light: '#1B5246',
          muted: '#286355',
        },
        moroccangold: {
          50: '#FDFBF4',
          100: '#F9F4E1',
          200: '#F2E4B8',
          300: '#E8D28A',
          400: '#D6B448',
          DEFAULT: '#C59B27', // Antique Brushed Gold
          deep: '#B8860B',
          dark: '#936D16',
        },
        espresso: {
          DEFAULT: '#2A231D', // Warm Espresso Charcoal
          muted: '#453B33',
          light: '#63554A',
        },
        terracotta: {
          DEFAULT: '#7D5A44', // Muted Terracotta
          warm: '#946B52',
          deep: '#624432',
        },
      },
      fontFamily: {
        amiri: ['"Amiri"', 'serif'],
        readex: ['"Readex Pro"', 'sans-serif'],
        tajawal: ['"Readex Pro"', '"Tajawal"', 'sans-serif'],
        sans: ['"Readex Pro"', 'system-ui', 'sans-serif'],
        serif: ['"Amiri"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'stationery': '0 25px 70px -15px rgba(14, 36, 31, 0.45), 0 0 0 1px rgba(197, 155, 39, 0.25)',
        'parchment-card': '0 12px 35px -5px rgba(42, 35, 29, 0.08), 0 0 0 1px rgba(197, 155, 39, 0.35)',
        'brass-knocker': '0 12px 30px -4px rgba(42, 35, 29, 0.75), inset 0 2px 4px rgba(255, 245, 200, 0.7), inset 0 -4px 8px rgba(90, 60, 15, 0.7)',
        'khatam-glow': '0 0 45px rgba(197, 155, 39, 0.55), 0 0 15px rgba(243, 234, 224, 0.4)',
        'lantern-spark': '0 0 20px rgba(197, 155, 39, 0.65)',
      },
    },
  },
  plugins: [],
}
