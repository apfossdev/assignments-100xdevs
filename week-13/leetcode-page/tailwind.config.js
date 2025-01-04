/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "font-awesome": ["fa-regular-400", 'sans-serif'],
      },
    },
  },
  plugins: [],
};

