/**
 * function that get random number from the range
 * @param {Number} min left edge of the range
 * @param {Number} max right edge of the range
 * @returns number within the range
 */
export const getRandomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
