export const convertToReal = (val: number) => {
  return val.toFixed(2).toString().replace(".", ",");
};

export const generateArray = (range: number) => {
  return Array.from({ length: range }, (_, i) => i + 1);
};

export const generateRandomNumber = (min: number, max: number): number => {
  return Math.round(Math.random() * (max - min) + min);
};
