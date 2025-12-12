let arr = data.split("\n");

let pos = 50;
let count = 0;

for (let i = 0; i < arr.length; i++) {
  let left = arr[i].includes("L");
  let move = "";

  if (left) {
    move = +arr[i].split("L")[1];

    while (move > 0) {
      pos--;
      move--;
      if (pos === 0) {
        count++;
        if (move > 0) {
          pos = 100;
        }
      }
      if (pos === -100) {
        pos = 0;
        count++;
      }
    }
  } else {
    move = +arr[i].split("R")[1];
    while (move > 0) {
      pos++;
      move--;
      if (pos === 100 || pos === 0) {
        pos = 0;
        count++;
      }
    }
  }
}

console.log("count is:", count);
