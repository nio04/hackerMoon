ar = [1, 3, 9, 15, 90];
const arr = [1, 3, 9, 15, 90];

const sum = (ar) => {
  return ar.reduce((acc, curr) => {
    return acc + curr;
  });
};

const avg = sum / ar.length;

console.log(avg)
