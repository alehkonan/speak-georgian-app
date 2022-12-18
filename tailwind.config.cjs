const colors = Object.freeze({
  raisinBlack: '#1f2024',
  coralRed: '#ff4040',
  deepCarminePink: '#ff2c2c',
  ripeMango: '#ffb629',
  maize: '#ffc148',
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
      height: {
        dynamic: 'max(30%, calc(45% - 25vw))',
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
      },
      gradientColorStops: {
        'ripe-mango': colors.ripeMango,
        'orange-yellow': colors.orangeYellow,
        caramel: colors.caramel,
        'coral-red': colors.coralRed,
        'deep-carmine-pink': colors.deepCarminePink,
        'picton-blue': colors.pictonBlue,
        'columbia-blue': colors.columbiaBlue,
      },
      backgroundImage: {
        khachapuri: "url('/src/assets/images/background.avif')",
      },
      borderColor: {
        'ripe-mango': colors.ripeMango,
      },
    },
  },
  plugins: [],
};
