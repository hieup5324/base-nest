export const randomCustom = (n) => {
  return [...Array(n)].map(() => (Math.random() * 10) | 0).join('');
};
