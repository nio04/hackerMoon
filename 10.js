const arr = [2, 3, -1, 5, 7, 9, 10, 15, 95];

const reduce = arr.reduce((acc, val) => {
  return acc + val;
});

console.log(reduce);
