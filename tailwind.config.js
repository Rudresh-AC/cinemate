module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        other: { min: "340px", max: "1263px" },
      },
      colors: {
        darkbg: "#1e293b",
      },
    },
  },
  plugins: [],
};
