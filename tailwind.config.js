/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors:{
      yellow:'rgb(235, 188, 0)',
      white:'#FFF',
      black:'#000',
      red:'#f44336',
      blue:'#2986cc',
    },
    screens:{
      'laptop':{'max':'1060px'},
      'tablet':{'max':'768px'},
      'mobile':{'max':'576px'},
    },
    extend: {
    },
  },
  plugins: [],
}

