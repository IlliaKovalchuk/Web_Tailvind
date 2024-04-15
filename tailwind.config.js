/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'gray-last': '#BDB9B9',
        'dark-futer':'#1B1B1B',
      },
      screens:{
        mb:{'min':'1100px'},
        md:{'min':'769px'},
        smP:{'min':'725px'},
        wwsm:{'min':'450px'},
        wsm:{'min':'420px'},
        wsesm:{'min':'325px'}
      },
    },
  },
  plugins: [],
}
