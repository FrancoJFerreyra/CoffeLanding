/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    fontFamily:{
      'body':['"Poppins"', 'sans-serif']
    },
    fontSize:{
      'menu__item': '1.063rem'
    },
    colors:{
      'softPink':'#f6ebda',
      'orange':'#ff902b'
    },
    container:{
      center:true
    },
    width:{
        'nav':'72.563rem',
        'nav__menu': '20.125rem'
      },
      height: {
        'nav': '2.5rem',
        'nav__menu': '1.688rem'
      },
    extend: {
      
    },
  },
  plugins: [],
}
