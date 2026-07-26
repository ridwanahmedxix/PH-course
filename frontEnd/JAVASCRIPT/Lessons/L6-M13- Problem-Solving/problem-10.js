// ? SumAverage

// # Without Function

// let arr = [1, 2, 5, 10];
// sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   sum = sum + arr[i];
// }
// console.log(sum);
// let avg = sum / arr.length;

// console.log(avg);

// # With Function

function avgGenarate(arr) {
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  let avg = sum / arr.length;
  return avg;
}
console.log(avgGenarate([1, 2, 5, 10]));
