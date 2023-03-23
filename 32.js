const input =
  "Create a function that will capitalize the first letter of each word in a text";

const capPerWord = (input) => {
  const word = input.split(" ");

  for (let i = 0; i < word.length; i += 1) {
    const arr = Array.from(word[i]);
    arr[0] = arr[0].toUpperCase();
    word[i] = arr.toString().replaceAll(",", "");
  }

  return word.toString().replaceAll(",", " ");
};

console.log(capPerWord(input));
