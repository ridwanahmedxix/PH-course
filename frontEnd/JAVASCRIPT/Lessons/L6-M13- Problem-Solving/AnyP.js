// function sumMath(a, b) {
//   const sum = a + b;
//   return sum;
// }
// console.log(sumMath(10, 20));

// # =========================================================

// const numbers = [12];

// for (num of numbers) {
//   const events = [];
//   if (num % 2 === 0) {
//     console.log("This is a Even Number  :", num);
//     events.push();
//   } else {
//     console.log("This is a Odd Number  :", num);
//   }
// }

// # ========================================================

// let numBer = 11;

// if (numBer % 2 === 0) {
//   console.log("Even :", numBer);
// } else {
//   console.log("Odd :", numBer);
// }

// # ========================================================

// function evenOdd(numBer) {
//   if (numBer % 2 === 0) {
//     console.log("Even :", numBer);
//   } else {
//     console.log("Odd :", numBer);
//   }
// }

// evenOdd(11);

// # ========================================================

// let number = 7;

// for (let i = 1; i <= 7; i++) {
//   number = i + number;

//   console.log(number);
// }

// # ========================================================

// let number = 7;
// let sum = 0;

// for (let i = 1; i <= number; i++) {
//   sum = sum + i;
//   console.log(i);
// }

// console.log(sum);

// # ========================================================

function sumRange(number) {
  let sum = 1;
  for (let i = 1; i <= number; i++) {
    sum = sum * i;
    console.log(i);
  }

  return sum;
}

console.log(sumRange(5));
