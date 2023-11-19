import { nextui } from '@nextui-org/react';
import scrollbarHide from 'tailwind-scrollbar-hide';
import safeArea from 'tailwindcss-safe-area';

const colors = Object.freeze({
  raisinBlack: '#1f2024',
  coralRed: '#ff4040',
  deepCarminePink: '#ff2c2c',
  ripeMango: '#ffb629',
  maize: '#ffc148',
  theme: '#ffc85f',
  orangeYellow: '#ffce70',
  caramel: '#ffda93',
  peach: '#ffe8bc',
  cosmicLatte: '#fff7e8',
  lapisLazuli: '#276692',
  steelBlue: '#317fb7',
  pictonBlue: '#48b3ff',
  columbiaBlue: '#c9dcea',
  antiFlashWhite: '#ebf2f7',
});

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      textColor: {
        'ripe-mango': colors.ripeMango,
        'orange-yellow': colors.orangeYellow,
        caramel: colors.caramel,
        peach: colors.peach,
        'cosmic-latte': colors.cosmicLatte,
        'lapis-lazuli': colors.lapisLazuli,
        'steel-blue': colors.steelBlue,
        maize: colors.maize,
        'raisin-black': colors.raisinBlack,
        'anti-flash-white': colors.antiFlashWhite,
        theme: colors.theme,
      },
      borderColor: {
        'ripe-mango': colors.ripeMango,
      },
      backgroundColor: {
        'raisin-black': colors.raisinBlack,
        'picton-blue': colors.pictonBlue,
        'steel-blue': colors.steelBlue,
        caramel: colors.caramel,
        maize: colors.maize,
        'ripe-mango': colors.ripeMango,
        'anti-flash-white': colors.antiFlashWhite,
      },
      backgroundImage: {
        'page-gradient': `linear-gradient(to top, ${colors.columbiaBlue}, ${colors.antiFlashWhite}, ${colors.cosmicLatte})`,
      },
      gridTemplateColumns: {
        'auto-fit-250': 'repeat(auto-fit, minmax(min-content, 250px))',
        'auto-fill-250': 'repeat(auto-fill, minmax(250px, auto))',
      },
    },
  },
  plugins: [scrollbarHide, safeArea, nextui()],
};
