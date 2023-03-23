const arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

const returnPositive = (input) => {
  return input.filter((val) => {
    return val > 0;
  });
};

console.log(returnPositive(arr));
