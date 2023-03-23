const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergeAndSum = (first, second) => {
  const input = [...first, ...second];

  return input.reduce((acc, curr) => {
    return acc + curr;
  });
};

console.log(mergeAndSum(arr1, arr2));
