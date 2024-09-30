/* @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
    theme: {
      container : {
        center : true,
        padding : {
          DEFAULT : '0rem',
          tablet : "0rem",
          ipad : '0rem',
        }
      },
      extend: {
        gridTemplateColumns : {
          main : '70% 30%'
        },
        colors : {
          "primery" : '#3e3e3e'
        },
      },
      screens : {
        "tablet" : '480px',
        "ipad" : '768px',
        "laptop" : '900px',
        "desktop" : "2024px"
      },
      fontFamily:  {
        Caveat : ['Caveat'],
        Bebas : ['Bebas'],
        Exo : ["Exo"],
        Roboto : ["Roboto"]
      }
    },
    plugins: [
      function ({addVariant}) {
        addVariant('child' , '& > *'); 
        addVariant('child-hover' , '& > *:hover');
       },
    ],
  }