export const generateClientOrderCodePartner = (branch_code: string) => {
  const randomIndex = Math.floor(Math.random() * 26);
  const randomChar = String.fromCharCode('A'.charCodeAt(0) + randomIndex);
  return `${branch_code}${randomChar}${Math.random()
    .toString(32)
    .slice(2, 11)
    .toUpperCase()}`;
};
