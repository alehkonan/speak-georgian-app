/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        khachapuri: "url('./public/background.webp')",
      },
    },
  },
  plugins: [],
};
