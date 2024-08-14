/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "4xl": [
          "-20px 20px 10px rgba(0, 0, 0, 0.25)"
        ],
      },
    },
  },
  plugins: [],
};
