export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#D20653",
        },
        accent: {
          100: "#FF951D",
          20: "#FFF5E9",
        },
        gray: {
          100: "#333333",
          80: "#4F4F4F",
          40: "#828282",
          20: "#E0E0E0",
          10: "#f6f4f5",
        },
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(90deg, #D20653 0%, #FF951D 100%)",
      },
    },
  },
  plugins: [],
};
