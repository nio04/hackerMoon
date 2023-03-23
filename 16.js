const prime = (input) => {
  let flags = false;
  for (let i = input - 1; i > 1; i -= 1){
    if (input % i === 0) flags = true;
  }
  return flags ? false : true;
}

console.log(prime(11))
