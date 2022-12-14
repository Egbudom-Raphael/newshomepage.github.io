/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1080px',
      xl: '1440px',
      "2xl": "1440px",
    },
    extend: {
      colors: {
        softorange: 'hsl(35, 77%, 62%)',
        softred: 'hsl(5, 85%, 63%)',
        offwhite: 'hsl(36, 100%, 99%)',
        grayishblue: 'hsl(233, 8%, 79%)',
        darkgrayishblue: 'hsl(236, 13%, 42%)',
        verydarkblue: 'hsl(240, 100%, 5%)',
      },
      fontFamily: {
        inter: ['Inter'],
      }
    },
  },
  plugins: [],
}