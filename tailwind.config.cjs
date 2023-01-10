/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-lime': '#51F129',
        'label-gray': '#8E909D',
        'input-bg': '#323645',
        'add-panel': '#282A37',
        'positive': '#4CA536',
        'negative': '#DF1414'
      },
      fontFamily:{
        'sans' : ['Poppins' , 'sans-serif'],
      }
    },
  },
  plugins: [],
}