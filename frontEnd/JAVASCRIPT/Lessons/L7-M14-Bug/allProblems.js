// Task 14-4: Debug a Broken Array Problem
// ? This function should return the first element of an array. It currently returns the wrong item.

// Bug: find why this doesn't return the first element

// function getFirstElement(arr) {
//   return arr[0]; // find the bug
// }

// console.log(getFirstElement([10, 20, 30])); // Expected: 10 (currently returns 20)

// Bug: find why the result comes out negative

// function subtract(a, b) {
//   return a - b; // find the bug
// }

// console.log(subtract(10, 3)); // Expected: 7 (currently returns -7)

// Bug: explain this line out loud — what does str.length actually equal for ""?

// function isEmpty(str) {
//   if (str === "") {
//     // find the bug
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isEmpty("")); // Expected: true
// console.log(isEmpty("hi")); // Expected: false

// ! =========================== PB - 07 ========================================

// This code has TWO bugs. Fix one, re-run, then find the next.

// function getOddNumbers(numbers) {
//   let odds = [];

//   for (let i = 0; i <= numbers.length; i++) {
//     // bug #1 is here
//     if (numbers[i] % 2 === 1) {
//       // bug #2 is here
//       odds.push(numbers[i]);
//     }
//   }

//   return odds;
// }

// console.log(getOddNumbers([1, 2, 3, 4, 5, 6])); // Expected: [1, 3, 5]

// ! =========================== PB - 08 ========================================

// Apply the full debugging process to find this bug

function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    // find the bug
    if (vowels.includes(str[i])) {
      count = count + 1;
    }
  }

  return count;
}

console.log(countVowels("orange")); // Expected: 3
