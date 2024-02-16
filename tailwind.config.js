/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        banner:
          "linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url('./assets/book-session.jpg')",
      },
    },
  },
  plugins: [],
};
