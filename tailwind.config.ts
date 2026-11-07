import type { Config } from 'tailwindcss'

export default <Config>{
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.{js,ts,vue}',
    './error.{js,ts,vue}'
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif']
      },
      colors: {
        gold: {
          50: '#faf6ed',
          100: '#f5ebd7',
          200: '#edd8b0',
          300: '#dfb76c',
          400: '#d4af37',
          500: '#c5a028',
          600: '#aa841c',
          700: '#886518',
          800: '#6e501a',
          900: '#5a421a'
        },
        sand: {
          50: '#faf8f5',
          100: '#f5f0e8',
          200: '#eadecf',
          300: '#dbc8b0',
          400: '#c5ae90',
          500: '#b09473'
        },
        noir: {
          50: '#f6f6f7',
          100: '#e2e2e5',
          200: '#c5c5cb',
          300: '#a3a3ad',
          400: '#7c7c89',
          500: '#62626e',
          600: '#4d4d57',
          700: '#3d3d45',
          800: '#2c2c32',
          900: '#17171a',
          950: '#0d0d0e'
        }
      },
      letterSpacing: {
        widest: '.2em',
        ultra: '.3em'
      }
    }
  },
  plugins: []
}
