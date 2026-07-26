let arr = [10, 23, 45, 68, 90, 54, 56, 78, 97];
let evenNumbers = [];
for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
  if (arr[i] % 2 === 0) {
    evenNumbers.push(arr[i]);
  }
}
console.log(evenNumbers);

let sum = 0;

for (let key in evenNumbers) {
  sum = sum + key;
}

console.log(sum);
