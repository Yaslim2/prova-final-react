export const convertToReal = (val: number) => {
  return val.toFixed(2).toString().replace(".", ",");
};
