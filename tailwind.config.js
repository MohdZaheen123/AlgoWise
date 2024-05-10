import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";


/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
  './pages/**/*.{js,jsx}',
  './components/**/*.{js,jsx}',
  './app/**/*.{js,jsx}',
  './src/**/*.{js,jsx}',
];
export const prefix = "";
export const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },
  extend: {
    animation: {
      spotlight: "spotlight 2s ease .75s 1 forwards",
      "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      orbit: "orbit calc(var(--duration)*1s) linear infinite",
    },
    keyframes: {
      spotlight: {
        "0%": {
          opacity: 0,
          transform: "translate(-72%, -62%) scale(0.5)",
        },
        "100%": {
          opacity: 1,
          transform: "translate(-50%,-40%) scale(1)",
        },
      },
      "border-beam": {
        "100%": {
          "offset-distance": "100%",
        },
      },
      orbit: {
        "0%": {
            transform: "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
        },
        "100%": {
            transform: "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
        },
    },
    },
    typography: {
      DEFAULT: {
        css: {
          maxWidth: '84ch',
          h2: {
            color: '#8403fc',
            display:'none'
          },
          hr: {
            color: '#8403fc',
            display:'none'
          },
          h1: {
            color: '#00000'
          },
          blockquote: {
            color: 'darkcyan'
          },
          pre: {
            'border-radius': '20px',
            'background-color': '#001324',
          },
          th: {
            color: '#a83246'
          },
          a: {
            color: '#3458eb'
          },
          h3: {
            color: 'palevioletred'
          },
          strong: {
            color: '#00000'
          },
          code: {
            width: '40%',
            margin: '0 auto',
            color: '#2e8aa6'
          },
          aside: {
            border: '2px solid',
            'border-radius': '15px',
            padding: '0px 1rem',
            color: 'palevioletred'
          }
        }
      }
    }
  },
};
export const plugins = [
  require('@tailwindcss/typography'),
  require("tailwindcss-animate"),
  addVariablesForColors
];



function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}