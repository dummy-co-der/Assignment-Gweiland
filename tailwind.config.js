/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      sans: ["sans-serif"],
    },
    extend: {
      colors: {
        E1C300: "#E1C300",
        navBlack: "#212122",
      },
      backgroundImage: {
        banner1: "url('/banner_1.png')",
        banner2: "url('/banner_2.png')",
        banner3: "url('/banner_3.png')",
        banner4: "url('/banner_4.png')",
      },
    },
  },
  plugins: [],
};
