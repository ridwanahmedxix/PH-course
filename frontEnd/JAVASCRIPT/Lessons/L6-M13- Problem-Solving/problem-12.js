// ?  Loop an Object

// # Without Function

let student = {
  name: "Ridwan Ahmed",
  age: 18,
  location: "Dhaka , Bangladesh",
  favColor: "Black",
};

for (let key in student) {
  console.log(key, ":", student[key]);
}
