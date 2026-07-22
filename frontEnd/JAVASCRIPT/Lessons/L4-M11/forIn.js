// const numbers = [11, 23, 56, 75, 67, 90];
// for (const number of numbers) {
//   console.log(number);
// }

// # ================================================

const student = {
  name: "Ridwan Ahmed",
  id: 112,
  age: 18,
  favSubjects: ["Math", "Physics", "ICT"],
};

for (const key in student) {
  //   console.log(key);
  const values = student[key];
  console.log(key, values);
}
