import * as dayjs from 'dayjs';

export function formatDate(
  date: string | Date,
  format = 'DD/MM/YYYY HH:mm:ss',
) {
  return dayjs(date).format(format);
}
