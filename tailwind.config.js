/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primaryColor: '#4C49ED',
        primaryColorShade: '#E4E3FF',
        secondaryColor: '#A1A0BD',
        secondaryColorShade: '#d1d5db',
    },
      fontFamily:{
        'mulish': 'Mulish',
      }},
  },
  plugins: [],
}

