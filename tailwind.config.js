/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        titulo: ["Oswald", "serif"],
        subtitulo: ["Montserrat", "sans-serif"],
        texto: ["Basic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
