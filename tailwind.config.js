/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      backgroundImage: {
        "gradient-to-b":
          "linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,0.02) 2%  , rgba(20,20,20,.05) 5% , rgba(20,20,20,.10) 10%,rgba(20,20,20,.12) 12% ,rgba(20,20,20,.15) 15%);",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  mode: "jit",
};
