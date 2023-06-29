/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        colorOne: '#333333',
        colorTwo: '#4F4F4F',
        colorThree: '#EB5757',
        colorFour: '#828282',
        colorFive: '#BDBDBD',
        colorShadow: '#f2f2f2'
      },
      gridTemplateColumns: {
        layout: 'repeat(auto-fit, minmax(min(350px, 100%), 1fr))'
      },
      boxShadow: {
        main: '0 0 .4rem .4rem #F2F2F2'
      },
      fontFamily: {
        monserrat: 'Montserrat, sans-serif'
      }
    }
  },
  plugins: []
}
