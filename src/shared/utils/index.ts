/**
 * function to format string to data according to locale
 * @param {String | null} date Date as a string
 * @returns formatted date as a string
 */
export const formatDate = (date: string | null) => {
  if (!date) return '';
  const dateFormatter = Intl.DateTimeFormat('ru-RU', { dateStyle: 'medium' });
  return dateFormatter.format(new Date(date));
};

/**
 * function that get random number from the range
 * @param {Number} min left edge of the range
 * @param {Number} max right edge of the range
 * @returns number within the range
 */
export const getRandomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
