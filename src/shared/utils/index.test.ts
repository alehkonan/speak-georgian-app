import { formatDate, generateRandomElements, getRandomInteger } from '.';

describe('utils', () => {
  describe('formatDate', () => {
    it('should return formatted date in en locale', () => {
      expect(formatDate('2022-02-02')).toBe('2 Feb 2022');
    });

    it('should return empty string for null or empty string', () => {
      expect(formatDate(null)).toBe('');
      expect(formatDate('')).toBe('');
    });
  });

  describe('getRandomInteger', () => {
    it('random integer should be in range', () => {
      expect(getRandomInteger(1, 3)).toBeGreaterThanOrEqual(1);
      expect(getRandomInteger(1, 3)).toBeLessThanOrEqual(3);
    });

    it('should get random integer in reversed range', () => {
      expect(getRandomInteger(10, 2)).toBeGreaterThanOrEqual(2);
      expect(getRandomInteger(10, 2)).toBeLessThanOrEqual(10);
    });

    it('should work with floats', () => {
      expect(getRandomInteger(0.1, 12.2)).toBeGreaterThanOrEqual(0.1);
      expect(getRandomInteger(0.1, 12.2)).toBeLessThanOrEqual(12.2);
    });
  });

  describe('generateRandomElements', () => {
    const elements = ['12', 'hello', 'undefined', 'World'];

    it('should have same elements in random order', () => {
      const shuffledElements = generateRandomElements(elements);

      const isSameElements = shuffledElements.every((element) =>
        elements.includes(element)
      );

      expect(isSameElements).toBe(true);
    });

    it('should get specified number of random elements', () => {
      const shuffledElements = generateRandomElements(elements, 2);

      expect(shuffledElements.length).toBe(2);
    });
  });
});
