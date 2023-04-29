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
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        card: 'min(100%, 30rem)',
      },
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
      gradientColorStops: {
        'ripe-mango': colors.ripeMango,
        'orange-yellow': colors.orangeYellow,
        caramel: colors.caramel,
        'coral-red': colors.coralRed,
        'deep-carmine-pink': colors.deepCarminePink,
        'picton-blue': colors.pictonBlue,
        'columbia-blue': colors.columbiaBlue,
        'cosmic-latte': colors.cosmicLatte,
        'anti-flash-white': colors.antiFlashWhite,
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
    },
  },
  plugins: [require('tailwind-scrollbar-hide'), require('tailwindcss-safe-area')],
};
