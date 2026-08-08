/*
  Problem 1: Most Expensive Product
  Given an object of product prices, use Object.keys() or Object.entries() + loop to
  find the most expensive product.

  Example: { pen: 20, book: 150, bag: 500 } -> "bag"
*/

const products = {
  mobile: 25000,
  laptop: 70000,
  watch: 5000,
  tablet: 30000,
};

let heightPrice = 0;
let mostExpensive = "";

let productsName = Object.keys(products);

for (let i = 0; i < productsName.length; i++) {
  let product = productsName[i];
  let price = products[product];

  if (price > heightPrice) {
    heightPrice = price;
    mostExpensive = product;
  }
}

// console.log(mostExpensive);

// # =========================================================================

/*
  Problem 2: Safe Nested Access
  Safely access deeply nested optional data using ?. and ?? without
  throwing errors.

  Example: user?.address?.city ?? "City not found" when address is undefined
*/

let user1 = {
  name: "Ridwan",
  address: {
    city: "Rangpure",
  },
};
let user2 = {
  name: "Shami",
  // address: {
  //   // city: "",
  // },
};

const getCity = (user) => {
  return user.address?.city;
};

console.log(getCity(user2));
