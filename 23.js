const input = "nishat";

const revString = (input) => {
  const reversed = []
  const arr = Array.from(input)

  for (let i = arr.length; i >= 0; i -= 1){
    reversed.push(arr[i])
  }

  return reversed.toString().replaceAll(",", "");
}

console.log(revString(input))
