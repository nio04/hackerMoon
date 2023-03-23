const getPrime = () => {
  const primes = [];

  for (let i = 3; i <= 100; i += 1) {
    let flags = false;
    for (let j = i - 1; j > 1; j -= 1) {
      if (i % j === 0) flags = true;
    }
    flags === false ? primes.push(i) : null;
  }

  return primes;
}

const makeSequence = (arr) => {
  const sequence = [];
   arr.map((_, index, arr) => {
    sequence.push(
      `${arr[index + 1]} - ${arr[index]} = ${arr[index + 1] - arr[index]}`
    );
  });
  return sequence;
}

makeSequence(getPrime())

const deleteLastEl = (arr) => {
  arr.pop();
  return arr
}

console.log(deleteLastEl(makeSequence(getPrime())));
