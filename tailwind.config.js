/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Dette sørger for at Tailwind ser index.html i rotmappen
    "./src/**/*.{js,jsx}", // Dette sørger for at Tailwind scanner alle js/jsx filer i src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
