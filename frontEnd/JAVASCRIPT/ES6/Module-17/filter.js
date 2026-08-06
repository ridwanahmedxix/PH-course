// let price = [10, 200, 300, 400, 500, 600];

// let expensivePrices = price.filter((element) => {
//   if (element >= 500) {
//     return true;
//   }
// });

// console.log(expensivePrices);

// ! ======================================
// ?  Find Method

let price = [10, 200, 300, 400, 500, 600];
let expensivePrice = price.find((element) => {
  if (element >= 500) {
    return true;
  }
});
console.log(expensivePrice);
