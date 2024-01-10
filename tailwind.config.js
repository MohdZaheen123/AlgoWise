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
            color: '#8403fc'
          },
          code:{
             color:'#03f8fc'
          },
          th:{
            color:'#a83246'
          },
          a:{
            color:'#3458eb'
          },
          h3:{
            color:'#34aeeb'
          },
          strong:{
            color:'#00000'
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