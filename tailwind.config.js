module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#fafafb",
          100: "#f5f5f5",
          200: "#ebebeb",
          500: "#9a9aa9",
          900: "#231f20",
          "500_01": "#999ca0",
          "100_01": "#f2f2f2",
        },
        indigo: { A100_6c: "#aba8ff6c", A200: "#605bff" },
        green: { 600: "#21a366", 800: "#107c41", 900: "#185c37" },
        blue: { A200: "#5b92ff" },
        black: { 900: "#030229", "900_87": "#03022987", "900_01": "#000000" },
        teal: { 400: "#33c481" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { figtree: "Figtree", nunito: "Nunito" },
      backgroundImage: {
        gradient: "linear-gradient(90deg ,#aba8ff6c,#aba8ff6c)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
