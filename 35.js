//  expected output: [["John","Smith","954-000-0000"],["Mich","Tiger","305-000-0000"],["Monique","Vasquez","103-000-0000"]]

const input =
  "John;Smith;954-000-0000\nMich;Tiger;305-000-0000\nMonique;Vasquez;103-000-0000";

const arr = input.split("\n");

const store = [];
for (let i = 0; i < arr.length; i += 1) {
  let tempo = "";
  if (i === 0) tempo += "[";
  tempo += "[";
  tempo += '"';
  for (let j of arr[i]) {
    if (j === ";") {
      tempo += '","';
    } else {
      tempo += j;
    }
  }
  tempo += '"';
  tempo += "]";
  if (i === arr.length - 1) tempo += "]";
  store.push(tempo);
}

console.log(store.toString());
