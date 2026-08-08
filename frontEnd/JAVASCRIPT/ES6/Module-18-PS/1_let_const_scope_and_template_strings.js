// let status = "Order Placed";

// for (var i = 1; i <= 3; i++) {
//   let status = "Processing Item " + i;
//   console.log(status);
// }

// console.log("Final Status:", status);

// # ======================================

function receiptGenerator(name, price, qnt) {
  return ` ${name} x${qnt} = ${price * qnt} Taka  `;
}

console.log(receiptGenerator("Pen", 20, 4));
