/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        google: {
          blue: '#1A73E8',
          'blue-hover': '#1557B0',
          'blue-surface': '#E8F0FE',
          red: '#EA4335',
          yellow: '#FBBC04',
          green: '#34A853',
          gray: {
            50: '#F8F9FA',
            100: '#F1F3F4',
            200: '#E8EAED',
            300: '#DADCE0',
            500: '#5F6368',
            700: '#3C4043',
            900: '#202124',
          }
        }
      },
      fontFamily: {
        sans: ['"Google Sans Text"', 'Roboto', 'system-ui', 'sans-serif'],
        display: ['"Google Sans"', 'Roboto', 'system-ui', 'sans-serif'],
        mono: ['"Google Sans Mono"', 'monospace']
      }
    },
  },
  plugins: [],
}
