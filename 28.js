const sumOfPrimes = () => {
  const primes = [];

  for (let i = 3; i <= 100; i += 1){
    let flags = false;
    for (let j = i - 1; j > 1; j -= 1){

      if (i % j === 0) flags = true;
    }
    flags === false ? primes.push(i) : null
  }

  return primes.reduce((acc, curr) => {
    return acc + curr;
  })
}

console.log(sumOfPrimes())
