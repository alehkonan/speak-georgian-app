import { formatDate } from './dates';

describe('formatDate', () => {
  it('should return formatted date in en locale', () => {
    expect(formatDate('2022-02-02')).toBe('2 Feb 2022');
  });

  it('should return empty string for null or empty string', () => {
    expect(formatDate(null)).toBe('');
    expect(formatDate('')).toBe('');
  });
});
