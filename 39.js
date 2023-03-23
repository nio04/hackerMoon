// expeced output: V YBIR WNINFPEVCG
const input = "I LOVE JAVASCRIPT";

const repeater = (ascii) => {
  const subAscii = ascii - 90;
  const finalAscii = 65 + (subAscii - 1);

  return String.fromCharCode(finalAscii);
};

const encrypter = (input, key) => {
  let res = "";

  for (let i = 0; i < input.length; i += 1) {
    const ascii = input.charCodeAt(i);
    const asciiSum = ascii + key;

    if (input[i] === " ") res += " ";
    else if (asciiSum > 90) res += repeater(asciiSum);
    else {
      res += String.fromCharCode(asciiSum);
    }
  }

  return res;
};

console.log(encrypter(input, 13));
