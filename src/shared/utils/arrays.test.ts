import { generateRandomElements } from './arrays';

describe('generateRandomElements', () => {
  const elements = ['12', 'hello', 'undefined', 'World'];

  it('should have same elements in random order', () => {
    const shuffledElements = generateRandomElements(elements);

    const isSameElements = shuffledElements.every((element) =>
      elements.includes(element),
    );

    expect(isSameElements).toBe(true);
  });

  it('should get specified number of random elements', () => {
    const shuffledElements = generateRandomElements(elements, 2);

    expect(shuffledElements.length).toBe(2);
  });
});
