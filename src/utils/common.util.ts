export function getString(value: string): string {
  if (!value) {
    return value;
  }
  return value.replace(/\\n/g, '\n');
}

export function getNumber(value: string): number {
  try {
    return Number(value);
  } catch {
    throw new Error(value + ' is not a number');
  }
}

export function getBoolean(value: string): boolean {
  try {
    return Boolean(JSON.parse(value));
  } catch {
    throw new Error(value + ' is not a boolean');
  }
}
export function isJsonString(str: string) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
