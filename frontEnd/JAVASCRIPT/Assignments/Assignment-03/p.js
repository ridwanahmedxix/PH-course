// function studentIntroduction(student) {
//   if (typeof student !== "object" || student === null) {
//     return "Invalid";
//   }

//   if (
//     !student.hasOwnProperty("name") ||
//     !student.hasOwnProperty("age") ||
//     !student.hasOwnProperty("course")
//   ) {
//     return "Inavlid";
//   }

//   return `My name is ${student.name} and my age ${student.age} and my favorite course ${student.course} `;
// }

// console.log(
//   studentIntroduction({
//     name: "Ridwan Ahmed",
//     age: 18,
//     course: "Web Development",
//   }),
// );

// # ===========================================

function filterActiveUsers(users) {
  if (!Array.isArray(users) || users.length === 0) {
    return "Invalid";
  }

  if (users.some((user) => !user.hasOwnProperty("isActive"))) {
    return "Invalid";
  }
  return users.filter((user) => user.isActive === true);
}
