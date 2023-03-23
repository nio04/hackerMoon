const input = 1235231;

const sumOfDigit = input => {
  const string = String(input).split("")
  return string.reduce((acc, val) => {
    return Number(acc) + Number(val);
  })
}
console.log(sumOfDigit(input))
