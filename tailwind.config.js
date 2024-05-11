/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      white: '#e5e4e4',
      black: '#333333',
      gray: {
        500: '#111111',
        400: '#222222',
        300: '#333333',
        200: '#666666',
        100: '#999999',
      }
    },
    extend: {
      fontFamily: {
        neon: ['Neonderthaw', ...defaultTheme.fontFamily.sans],
        freeman: ['Freeman', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [],
}

