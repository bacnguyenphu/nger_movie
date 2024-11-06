const { transform } = require('lodash');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'black-fade-top': 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))',
        'black-fade-bottom': 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))',
        'black-fade-bottom2': 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))',
      },
      animation: {
        "scale-up-center": "scale-up-center 0.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
        "height-down":"height-down 0.2s both ",
        "slide-top":"slide-top 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
      keyframes: {
        "scale-up-center": {
          "0%": {
            transform: 'scale(0.5)',
          },
          "100%": {
            transform: 'scale(1)',
          }
        },
        "height-down":{
          "0%":{
            height:'0%'
          },
          "100%":{
            height:'100%'
          }
        },
        "slide-top":{
          '0%': {
            transform: 'translateY(70px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
      boxShadow: {
        'custom': 'rgba(14, 30, 37, 0.24) 0px 2px 4px 0px, rgba(14, 30, 37, 0.5) 0px 2px 16px 0px',
      },
    },
  },
  plugins: [],
}
