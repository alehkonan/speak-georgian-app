/**
 * function to format string to data according to locale
 * @param {String | null} date Date as a string
 * @returns formatted date as a string
 */
export const formatDate = (date: string | null) => {
  if (!date) return '';
  const dateFormatter = Intl.DateTimeFormat('en-GB', { dateStyle: 'medium' });
  return dateFormatter.format(new Date(date));
};
