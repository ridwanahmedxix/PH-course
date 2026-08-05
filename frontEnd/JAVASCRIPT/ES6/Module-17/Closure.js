function cashRegister() {
  let amount = 0;

  return function (recevieAmount) {
    amount += recevieAmount;
    return amount;
  };
}

let coffeshopCashCounter = cashRegister();
console.log(coffeshopCashCounter(250));
