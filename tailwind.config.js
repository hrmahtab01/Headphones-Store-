import { VscArrowLeft } from 'react-icons/vsc';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Primary:"#aa6d6b",
        BrandDarkL:"#151616"
      },
      fontFamily:{
       Poppins:["Poppins", "sans-serif"],
       Varela:[ "Varela", "sans-serif"]
      },
      container:{
        center:true,
        padding:{
          default:"1rem",
          sm: "2rem" ,
          lg: "4rem" ,
          xl: "5rem",
          "2xl":"6rem"
        }
      }
    },
  },
  plugins: [],
}