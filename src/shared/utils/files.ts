type MimeType = {
  type: string;
  subtype?: string;
};

const parseMimeType = (mimeType: string): MimeType => {
  const [type, subtype] = mimeType.split('/');

  return { type, subtype };
};

/**
 * Checks if file mime type suits input accept attr
 * @param accept input attribute
 * @param fileType
 * @example getCanAcceptFile('image/*', 'image/png') => true getCanAcceptFile('image/*', 'text/html') => false
 */
export const getCanAcceptFile = (accept?: string, fileType?: string) => {
  if (!accept) return true;
  if (!fileType) return false;

  const { type, subtype } = parseMimeType(accept);
  const file = parseMimeType(fileType);

  const hasAcceptableSubtype =
    !subtype || subtype === '*' || subtype === file.subtype;

  return type === file.type && hasAcceptableSubtype;
};
