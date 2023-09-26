/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainColor': '#0b132bff',
        'lightMainColor': '#1c2541ff',
        'secondaryColor': '#f8f4f9ff',
        'thirdColor': '#fca311ff',
      },
      boxShadow: {
        'project':'0px 10px 20px',
      },
      fontFamily: {
        'body': "Open Sans"
      },
    },
  },
  plugins: [],
}

