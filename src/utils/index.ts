export const formatDate = (date: string | null) => {
  if (!date) return '';
  const dateFormatter = Intl.DateTimeFormat('ru-RU', { dateStyle: 'medium' });
  return dateFormatter.format(new Date(date));
};
