const input = "1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9";

const sum = (input) => {
  const arr = input.split(",");

  return arr.reduce((acc, val) => {
    return Number(acc) + Number(val);
  });
}

console.log(sum(input))
