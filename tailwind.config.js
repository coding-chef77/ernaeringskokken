/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Dette sørger for at Tailwind ser index.html i rotmappen
    "./src/**/*.{js,jsx}", // Dette sørger for at Tailwind scanner alle js/jsx filer i src
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#A5D6A7",
          DEFAULT: "#4CAF50",
          dark: "#2E7D32",
        },
        secondary: {
          light: "#FFCC80",
          DEFAULT: "#FF9800",
          dark: "#EF6C00",
        },
        gray: {
          100: "#F5F5F5",
          200: "#E0E0E0",
          400: "#BDBDBD",
          500: "#757575",
          700: "#424242",
        },
        info: {
          light: "#BBDEFB",
          DEFAULT: "#2196F3",
          dark: "#1565C0",
        },
        warning: {
          light: "#FFF59D",
          DEFAULT: "#FFEB3B",
          dark: "#FBC02D",
        },
        error: {
          light: "#EF9A9A",
          DEFAULT: "#F44336",
          dark: "#C62828",
        },
        success: {
          light: "#A5D6A7",
          DEFAULT: "#4CAF50",
          dark: "#2E7D32",
        },
      },
    },
  },
  plugins: [],
};
