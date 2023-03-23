const ar1 = [1, 2, 3, 10, 5, 3, 14];
const ar2 = [-1, 4, 5, 6, 14];

const returnElementsWhichAreNotInSecond = (first, second) => {
  const res = [];
  for (let i = 0; i < first.length; i += 1) {
    let flags = false;
    for (let j = 0; j < second.length; j += 1) {
      if (first[i] === second[j]) {
        flags = true;
      }
    }
    flags === false ? res.push(first[i]) : null;
  }
  const set = new Set(res);
  return [...set]
};

console.log(returnElementsWhichAreNotInSecond(ar1, ar2));
