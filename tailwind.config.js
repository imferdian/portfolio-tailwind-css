/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#408080',
        secondary: '#5ea3a2',
        dark: '#243c3d',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
