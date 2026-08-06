/* 
  Problem 1: Flexible Total Calculator
  calculateTotal(...prices) using rest params, sums any number of
  prices.

  Example: calculateTotal(0, 100, 200, 300) -> 600
  Example: calculateTotal(10, 100, 200) -> 270   (10 = discount%)
*/

// # ======================================

// function calculateTotal(discount, ...prices) {
//   //   console.log(prices);

//   //      let total = prices.reduce(
//   //     (accumulator, currentValue) => accumulator + currentValue,
//   //     0,
//   //   );

//   let total = 0;
//   for (let i = 0; i < prices.length; i++) {
//     total += prices[i];
//   }

//   let disccountAmount = (total * discount) / 100;
//   //   console.log(total);
//   let disscountAmountAfter = total - disccountAmount;
//   return disscountAmountAfter;
// }

// console.log(calculateTotal(10, 100, 200, 50, 300));
// console.log(calculateTotal(null, 100, 200, 50, 300));

// # ===============================================

/*
  Problem 2: Merge & Deduplicate Arrays
  Merge two arrays and remove duplicates using spread + Set.

  Example: [1,2,3] + [2,3,4] -> [1,2,3,4]
*/

let arr1 = [10, 20, 30, 40, 50];
let arr2 = [50, 60, 20, 90];

let mergedArry = [...arr1, ...arr2];

console.log(mergedArry);

let newArry = [...new Set(mergedArry)];

console.log(newArry);
