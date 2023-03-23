let store = "";
let first = 0;
let second = 1;
let sum = first + second;
store += first + " + " + second + " + " + sum + " + ";
let i = 2;

while (i <= 10) {
  first = second;
  second = sum;
  sum = first + second;
  store += sum + " + ";
  i += 1;
}

const arr = Array.from(store);
arr.splice(-3, 3);
const string = arr.toString().replaceAll(",", "");
console.log(string)
