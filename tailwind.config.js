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
    colors: {
      green: {
        100: "#00240F",
        200: "#00471F",
        300: "#006B2E",
        400: "#008F3E",
        500: "#00B34C",
        600: "#00F56A",
        700: "#38FF8E",
        800: "#7AFFB4",
        900: "#BDFFD9",
      },
      blue: {
        100: "#001724",
        200: "#002E47",
        300: "#00466B",
        400: "#005D8F",
        500: "#0074B4",
        600: "#009FF5",
        700: "#38B9FF",
        800: "#7AD1FF",
        900: "#BDE8FF",
      },
      yellow: {
        100: "#392F00",
        200: "#725D00",
        300: "#AB8C00",
        400: "#E4BB00",
        500: "#FFD41F",
        600: "#FFDE4B",
        700: "#FFE678",
        800: "#FFEFA5",
        900: "#FFF7D2",
      },
      purple: {
        100: "#12061F",
        200: "#250C3E",
        300: "#37125D",
        400: "#49187B",
        500: "#5B1D99",
        600: "#7C28D1",
        700: "#9D5AE0",
        800: "#BE91EA",
        900: "#DEC8F5",
      },
      orange: {
        100: "#3D1001",
        200: "#7B2002",
        300: "#B83003",
        400: "#F54004",
        500: "#FC6E3D",
        600: "#FD8962",
        700: "#FDA689",
        800: "#FEC4B1",
        900: "#FEE1D8",
      },
    },
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
        cards: "0px 2px 6px rgba(0, 0, 0, 0.25)",
        filter: "0px 2px 6px rgba(171, 140, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
