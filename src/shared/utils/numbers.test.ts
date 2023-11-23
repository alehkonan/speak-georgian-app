import { getRandomInteger } from './numbers';

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
