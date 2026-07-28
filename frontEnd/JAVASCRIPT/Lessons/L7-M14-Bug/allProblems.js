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

function isEmpty(str) {
  if (str === "") {
    // find the bug
    return true;
  } else {
    return false;
  }
}

console.log(isEmpty("")); // Expected: true
console.log(isEmpty("hi")); // Expected: false
