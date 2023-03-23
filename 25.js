const ar1 = [1, 2, 3, 10, 5, 3, 14];
const ar2 = [1, 4, 5, 6, 14];

const union = (first, second) => {
  const res = [];
  const test = [];
  for (let i = 0; i < first.length; i += 1) {
    let flags = false;
    for (let j = 0; j < second.length; j += 1) {
      if (first[i] === second[j]) {
        flags = true;
        second.splice(j, 1)
      }
    }
    flags === false ? res.push(first[i]) : null;
  }
  res.push(...second);
  const set = new Set(res)
  return [...set]
};

console.log(union(ar1, ar2));
