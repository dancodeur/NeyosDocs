/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./newDocs.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
  
}