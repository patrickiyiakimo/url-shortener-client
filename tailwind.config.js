module.exports = {
  purge: ["./src/**/*.{js,jsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        abc: ["Montserrat", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    // other plugins can be added here if needed
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
};
