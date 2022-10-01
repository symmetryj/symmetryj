/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/main.jsx",
    "./src/App.jsx",
    "./components/Resault.jsx",
    "./components/Question.jsx",
  ],
  theme: {
    extend: {
      colors: {
        background: "#121212",
        component: "#1d1d1d",
      },
    },
  },
  plugins: [],
};
