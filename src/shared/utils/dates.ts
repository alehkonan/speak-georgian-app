/**
 * function to format string to data according to locale
 * @param {String | null} date Date as a string
 * @returns formatted date as a string
 */
export const formatDate = (date?: string | null) => {
  if (!date) return '';
  try {
    const dateFormatter = Intl.DateTimeFormat('cs', { dateStyle: 'short' });
    return dateFormatter.format(new Date(date));
  } catch (error) {
    return '';
  }
};
