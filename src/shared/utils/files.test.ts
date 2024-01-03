import { getCanAcceptFile } from './files';

describe('files', () => {
  describe('getCanAcceptFile', () => {
    it('should accept file with same type', () => {
      expect(getCanAcceptFile('image/*', 'image/png')).toBe(true);
    });

    it('should accept file with same subtype', () => {
      expect(getCanAcceptFile('image/png', 'image/png')).toBe(true);
    });

    it('should not accept file with different types', () => {
      expect(getCanAcceptFile('text/*', 'image/png')).toBe(false);
    });

    it('should not accept file with different subtypes', () => {
      expect(getCanAcceptFile('text/html', 'text/plain')).toBe(false);
    });
  });
});
