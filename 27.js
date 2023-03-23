const ar =[1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100];

const printDistinctEl = (input) => {
  const set = new Set(input);

  return [...set]
}

console.log(printDistinctEl(ar))
