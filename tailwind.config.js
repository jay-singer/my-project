/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        xsmall: "358px",
      },
      colors: {
        navBag: "rgb(0, 99, 207)",

        formColor: "linear-gradient(134deg, rgb(0, 99, 207), rgb(0, 153, 232))",
      },
    },
  },
  plugins: [],
};
