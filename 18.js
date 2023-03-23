const printPrimes = () => {
  const primes = [];
  const notPrimes = [];
  for (let i = 3; i <= 100; i += 1) {
    let flags = false;


    for (let j = i - 1; j > 1; j -= 1) {
      if (i % j === 0) {
        flags = true;
        break;
      }
    }
    flags === false ? primes.push(i) : notPrimes.push(i);
  }

  return primes;
};

console.log(printPrimes());
