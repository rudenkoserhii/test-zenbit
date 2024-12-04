export const splitNumber = (number) => {
  let array = [];

  for (let i = String(number).length - 1; i >= 0; i--) {
    if ((String(number).length - 1 - i) % 3 === 0) {
      array.unshift(" ");
    }
    array.unshift(String(number)[i]);
  }
  return array.join("");
};
