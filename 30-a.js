const n1 = "2909034221912398942349";
const n2 = "1290923909029309499";

const sum = (first, second) => {
  const num1 = BigInt(first);
  const num2 = BigInt(second);

  return num1 + num2;
};

console.log(sum(n1, n2));
