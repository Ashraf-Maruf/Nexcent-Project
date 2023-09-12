/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {

      black: {
        500: "#263238",
        900: "#080a0b"
      },

      indigo: {
        400: "#717171",
        500: "#4d4d4d",
      },
      gray: {
        500: "#89939e",
        900: "#abbed1"
      },
      white: {
        500: "#f5f7fa",
        900: "#ffffff"
      },
      green: {
        100: "#e8f5e9",
        200: "#c8e6c9",
        300: "#a5d6a7",
        400: "#81c784",
        500: "#28cb8b",
        600: "#66BB69",
        900: '#4caf4f'
      },
      blue: {
        500: "#2194f3",
      },
      color_Shade: {
        500: "#43a046",
        600: "#388E3B",
        700: "#237D31",
        800: "#1B5E1F",
        900: "#103E13"
      },

    },
    screens: {
      '2xl': { 'max': '1536px' },
      'xl2': { 'max': '1450px' },
      'xl1': { 'max': '1366px' },
      'xl': { 'max': '1280px' },
      'lg1': { 'max': '1199px' },
      'lg': { 'max': '1024px' },
      'md2': { 'max': '992px' },
      'md1': { 'max': '896px' },
      'md': { 'max': '768px' },
      'sm1': { 'max': '640px' },
      'sm': { 'max': '575px' },
      'xm4': { 'max': '480px' },
      'xm3': { 'max': '425px' },
      'xm2': { 'max': '393px' },
      'xm1': { 'max': '360px' },
      'xm': { 'max': '320px' }
    },
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        OpenSans: ['Open Sans', 'sans-serif']
      },
    },
  },
  plugins: [require("daisyui")],

}
