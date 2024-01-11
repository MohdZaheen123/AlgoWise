/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      typography: {
      DEFAULT: {
        css: {
          maxWidth: '84ch',
          h2:{
            color: '#8403fc'
          },
          h1:{
            color: '#00000'
          },
          blockquote:{
            color: 'darkcyan'
          },
          pre:{
             color:'#00000',
             'background-color': 'darkslategrey'
          },
          th:{
            color:'#a83246'
          },
          a:{
            color:'#3458eb'
          },
          h3:{
            color:'palevioletred'
          },
          strong:{
            color:'#00000'
          },
          aside:{
    border: '2px solid',
    'border-radius': '15px',
    padding: '0px 1rem',
    color: 'palevioletred'
          }
        }
      }
    }
    },
    
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("tailwindcss-animate")
  ],
}