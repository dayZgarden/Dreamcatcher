/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      boxShadow: {
        'cool': '5px 7px 0px 0px rgb(17 24 49)',
        'cool-effect': '0 5px 0 #58a700',
        'cool-effect2': '0 0 0 #58a700',
        'cool2': '3px 4px 0px 0px rgb(0 0 0)',
        'cool3': '3px 4px 0px 0px rgb(255 255 255)',
      },
    },
  },
  plugins: [],
}