//  EvenOdd Checker & Sum of a Range

// const numbers = [11, 12, 13, 14, 15, 16];

// for (num of numbers) {
//   const evens = [];

//   if (num % 2 === 0) {
//     console.log("This is a Even Number", num);
//     evens.push();
//   } else {
//     console.log("This is a Odd Number", num);
//   }
// }

// # =================================================================

function evenOdd(numBer) {
  if (numBer % 2 === 0) {
    return "Even Number";
  } else {
    return "Odd Number ";
  }
}

console.log(evenOdd(11));
console.log(evenOdd(22));
