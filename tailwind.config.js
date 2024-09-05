/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  purge: {
    content: ["./src/**/*.tsx"],
  },
  theme: {
    extend: {
      colors: {
        black: "#0F0F0F",
        "dark-grey": "#141414",
        "light-grey": "#252525",
        blue: "#3671E9",
        purple: "#7583FF",
        "light-blue": "#4C94FF",
        green: "#00C278",
        dark_green: "#166534",
        light_green: "#00C2781A",
        light_green_2: "#DCFCE7",
        light_text: "#FFFFFF99",
        red: "#EFA411",
        pen_blue: "#1D4ED8",
        pink: "#991B1B",
        light_pink: "#FECACA",
        "light-green": "#FFF281",
        "off-white": "#FCFCFC",
        gray: { 950: "#141414" },
      },
      screens: {
        "2xl": "1536px",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      typography: {
        poppins: {
          css: {
            fontFamily: "Poppins, sans-serif",
          },
        },
      },
    },
  },
  plugins: [],
});
