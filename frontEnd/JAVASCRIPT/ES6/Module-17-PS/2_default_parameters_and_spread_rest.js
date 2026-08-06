function calculateTotal(discount, ...prices) {
  console.log(prices);
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    total += prices[i];
  }

  console.log(total);
}

calculateTotal(10, 100, 200, 50, 300);
