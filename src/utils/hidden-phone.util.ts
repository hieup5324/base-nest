export function hiddenPhonNumber(phone: string) {
  if (!phone) return null;
  return `******${phone.slice(6)}`;
}
