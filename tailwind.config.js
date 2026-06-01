/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          50:  '#f0faf4',
          100: '#d9f2e3',
          200: '#b3e4c7',
          300: '#7dcfa3',
          400: '#45b47a',
          500: '#22965e',
          600: '#157a4b',
          700: '#116040',
          800: '#0f4d34',
          900: '#0d3f2b',
          950: '#072318',
        },
        ink: {
          50:  '#f6f7f9',
          100: '#eceff3',
          200: '#d4dce7',
          300: '#aebece',
          400: '#829cb5',
          500: '#5f7d9b',
          600: '#4c6582',
          700: '#3e526a',
          800: '#354659',
          900: '#1a2436',
          950: '#0f1624',
        },
      },
      animation: {
        'fade-up':  'fadeUp 0.5s ease-out',
        'fade-in':  'fadeIn 0.4s ease-out',
      },
      keyframes: {
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(16px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
      },
      boxShadow: {
        soft:    '0 2px 15px -3px rgba(0,0,0,0.07), 0 10px 20px -2px rgba(0,0,0,0.04)',
        premium: '0 20px 60px -10px rgba(22,96,64,0.15), 0 4px 20px -2px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}
