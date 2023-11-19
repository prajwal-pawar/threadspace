/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // custom color themes
      colors: {
        threadspace: {
          DEFAULT: "#f1f1f1",
          header: "#ecf4d6",
          searchbar: "#f5f9ea",
          background: "#f1f1f1",
        },
      },
    },
  },
  plugins: [],
};
