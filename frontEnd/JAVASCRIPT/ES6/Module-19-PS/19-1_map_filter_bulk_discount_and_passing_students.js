/*
  Problem 1: Bulk Discount Applier
  applyDiscount(prices, rate) — apply a discount % to every price in the
  array and return a NEW array. The ORIGINAL prices array must stay
  exactly the same.

  Input:
    prices = [500, 1000, 250]
    rate   = 10   (10% discount)

  Output:
    [450, 900, 225]

  Original prices array must remain [500, 1000, 250] afterwards.
*/

const applyDiscount = (price, discountRate = 0) => {
  let priceAfterDiscount = price.map((element, index, array) => {
    const discountPrice = element - (element * discountRate) / 100;
    return discountPrice;
  });
  //   console.log(priceAfterDiscount);
  return priceAfterDiscount;
};

let productPrices = [500, 1000, 250, 400, 345, 234];
console.log(productPrices);
console.log(applyDiscount(productPrices, 10));
