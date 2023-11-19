/**
 * function to generate random elements from an array
 * @param elements
 * @param {Number} count number of elements to return
 * @returns array of elements in random order
 */
export const generateRandomElements = <Element = string>(
  elements: Element[],
  count?: number,
) => {
  const shuffled = [...elements].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};
