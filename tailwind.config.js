/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rota: ["Rota", "cursive"],
        Manrope: ["Manrope", "cursive"],
      },
      colors: {
        gray: {
          bg: "#FBFDFE",
          BG_alt: "#F9FAFB",
          border: "#CCCCCC",
          lighter: "#B7C0C7",
          light: "#8E9BA4",
          text: "#687782",
          title: "#273B49",
        },
      },
      boxShadow: {
        search: "0px 4px 8px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
