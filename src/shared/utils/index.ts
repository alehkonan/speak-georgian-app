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

/**
 * function to generate random elements from an array
 * @param elements
 * @param {Number} count number of elements to return
 * @returns array of elements in random order
 */
export const generateRandomElements = <Element = string>(
  elements: Element[],
  count?: number
) => {
  const shuffled = [...elements].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

/**
 * A function to recalculate font size to fit the container
 * @param {HTMLElement} node container node element
 * @param {String} word that should be fit
 * @param {Number} fontRatio ratio of font height to font width
 */
export const recalculateFontSize = (
  node: HTMLElement,
  word: string,
  fontRatio: number
) => {
  const { width } = node.getBoundingClientRect();
  const style = getComputedStyle(node);

  const currentFontSize = Number(style.fontSize.replace('px', ''));
  const currentLetterWidth = currentFontSize / fontRatio;
  const isWordFit = width / currentLetterWidth > word.length;

  if (!isWordFit) {
    const fontSize = Math.ceil(width / word.length);
    node.style.fontSize = `${fontSize * fontRatio}px`;
  }
};
