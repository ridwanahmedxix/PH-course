let array = [500, 22, 35, 677, 888, 1000];
let largest = array[0];
for (let i = 1; i < array.length; i++) {
  let currentElement = array[i];
  if (currentElement > largest) {
    largest = currentElement;
  }
}

console.log("Largest Number :", largest);
