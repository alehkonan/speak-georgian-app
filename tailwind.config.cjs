const colors = {
  primary: 'hsl(40, 100%, 58%)',
  'primary-200': 'hsl(40, 100%, 64%)',
  'primary-300': 'hsl(47, 100%, 70%)',
  'primary-400': 'hsl(50, 100%, 77%)',
  'primary-500': 'hsl(51, 100%, 82%)',
  'primary-600': 'hsl(54, 100%, 95%)',
  secondary: 'hsl(205, 58%, 36%)',
  'secondary-200': 'hsl(205, 58%, 45%)',
  lightGray: 'hsl(205, 43%, 95%)',
  dark: 'hsl(228, 7%, 13%)',
  gray: 'hsla(228, 7%, 13%, 0.5)',
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        primary: colors.primary,
        secondary: colors.secondary,
        dark: colors.dark,
        gray: colors.gray,
      },
      gradientColorStops: {
        primary: colors.primary,
        'primary-200': colors['primary-200'],
        'primary-500': colors['primary-500'],
      },
      backgroundImage: {
        khachapuri: "url('/src/assets/images/background.avif')",
      },
    },
  },
  plugins: [],
};
