const input =
  "John;Smith;954-000-0000\nMich;Tiger;305-000-0000\nMonique;Vasquez;103-000-0000";

const arr = input.split("\n");

const store = [];
store.unshift("[")
for (let i = 0; i < arr.length; i += 1){
  let tempo = "";
  tempo += "["
  tempo += '"'
  for (let j of arr[i]) {
    if (j === ";") {
      tempo += '","'
    } else {
      tempo += j
    }
  }
  tempo += '"';
  tempo += "]"
  store.push(tempo)
}

store.push("]");

const string = store.toString();
const rep1 = string.replace("[,[", "[[")
const rep2 = rep1.replace("],]", "]]")
console.log(rep2)
