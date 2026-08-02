// function addmitionConfirmd(name, amount) {
//   let message = ` What's up ${name} ? Your payment amount is : ${amount} `;
//   return message;
// }

// console.log(addmitionConfirmd("Ridwan", 3600));

// ! =========================================================

function addmitionConfirmd(name, amount) {
  let message = ` What's up ${name || "Student"} ? Your payment amount is : ${amount} `;
  return message;
}

console.log(addmitionConfirmd("Ridwan", 3600));
console.log(addmitionConfirmd(undefined, 3600));
