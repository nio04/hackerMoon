const test = ["first", "second"];

const firstTest = test[0];
const arr = Array.from(firstTest);
arr[1] = "e"

test[0] = arr

console.log(arr)
console.log(test)
