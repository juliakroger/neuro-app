module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        green: {
          100: "#A5EB78",
          200: "#4a9a16",
          300: "#75b891",
          400: "#82D8A5",
          500: "#67cf92",
          600: "#162d36",
          700: "#0f1e24",
        },
        blue: {
          100: "#8ec4ef",
          200: "#8cc5f1",
          300: "#5e9bcb",
          400: "#6eaac3",
          500: "#5ebccb",
          600: "#4a95b4",
          700: "#38719e",
          800: "#2c596c",
          900: "#162d36",
          dark: "#162d36",
        },
        purple: {
          100: "#8890BB",
          200: "#59519b",
          300: "#51479e",
          400: "#473e90",
          500: "#393273",
          600: "#282265",
          700: "#2A2069",
          800: "#2e285c",
          900: "#282351",
        },
        orange: {
          100: "#f5aa93",
          200: "#f39d84",
          300: "#c48876",
          400: "#dd9984",
          500: "#f48b5d",
          600: "#E97C75",
          700: "#90503d",
        },
        yellow: {
          100: "#ffd9a3",
          200: "#ffd59a",
          300: "#f4b55d",
        },
        // red: {
        // #e50062
        // #E0230D
        // #FF5440
        // },
      },
      backgroundImage: {
        "purple-pattern":
          "url('src/images/wave-background-purple.png'), linear-gradient(180deg, #51479e 0%, #282265 100%)",
        "blue-pattern": "linear-gradient(180deg, #5ebccb 0%, #38719e 100%)",
        "orange-pattern": "linear-gradient(180deg, #f48b5d 0%, #e97c75 100%)",
        "empty-box": "linear-gradient(25.35deg, #302871 0%, #2C2C2C 100%)",
        "orange-box": "radial-gradient(circle, #ff8780 0%, #dc6159 100%)",
        "blue-box": "radial-gradient(circle, #8cc5f1 0%, #5e9bcb 100%)",
        "yellow-box": "radial-gradient(circle, #ffd9a3 0%, #f4b55d 100%)",
      },
    },
  },
  plugins: [],
};
