const availabeFilter = (products) => {
  const filterData = products.filter((product) => products.inStock == true);

  return filterData;
};

const reterResult = availabeFilter([
  { name: "Shirt", inStock: true },
  { name: "Shoes", inStock: false },
]);

console.log(reterResult);
