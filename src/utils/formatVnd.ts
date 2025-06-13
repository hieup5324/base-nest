export function formatCash(str, splitCharacter = ',') {
  return str
    .toString()
    .split('')
    .reverse()
    .reduce((prev, next, index) => {
      return (index % 3 ? next : next + splitCharacter) + prev;
    });
}
