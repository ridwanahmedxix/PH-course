// let numBers = [2, 4, 6, 8, 10];
// let double = [];
// for (let i = 0; i < numBers.length; i++) {
//   double.push(numBers[i] * 2);
// }
// console.log(double);

// ! ================================================

let numBers = [2, 4, 6, 8, 10];

const double = numBers.map(function (element) {
  return element * 2;
});

console.log(double);
