// ? Filter by Condition

// # Without Function

// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// let value = 50;
// let filterArray = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > value) {
//     filterArray.push(arr[i]);
//   }
// }
// console.log(filterArray);

// # With Function

function filterNumber(arr) {
  let value = 50;
  let filterArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > value) {
      filterArray.push(arr[i]);
    }
  }
  return filterArray;
}

console.log(filterNumber([10, 30, 45, 67, 89, 90]));
