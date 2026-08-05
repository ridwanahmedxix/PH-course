function cashRegister() {
  let amount = 0;

  return function () {
    return amount;
  };
}
