/*
  Problem 1: Nested Response Extractor
  Extract specific fields from a nested API-like response object using
  destructuring, with renaming + default value.

  Example: { user: { name: "Rafi", age: 22 } } -> extract name as
  userName, default age = 18 if missing
*/

const responseExtractor = (obj) => {
  console.log(obj);
};

console.log(responseExtractor({ user: { name: "Rafi", age: 22 } }));
