/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'slate': '#2c2f33',
      'blurple': '#5865F2',
      'green': '#57F287',
      'yellow': '#FEE75C',
      'pink': '#EB459E',
      'red': '#ED4245',
      'white': '#ffffff',
      'black': '#000000',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}