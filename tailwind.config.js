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
          "linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0.75)), url('./assets/book-session.jpg')",
      },
    },
  },
  plugins: [],
};
