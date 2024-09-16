import { formatDate } from './dates';

describe('formatDate', () => {
	it('should return formatted date in en locale', () => {
		expect(formatDate('2022-02-02')).toBe('02.02.22');
	});

	it('should return empty string for empty or incorrect date string', () => {
		expect(formatDate(null)).toBe('');
		expect(formatDate()).toBe('');
		expect(formatDate('incorrect date')).toBe('');
		expect(formatDate('')).toBe('');
	});
});
