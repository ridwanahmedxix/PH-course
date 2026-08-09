function studentIntroduction(student) {
  if (typeof student !== "object" || student === null) {
    return "Invalid";
  }

  if (
    !student.hasOwnProperty("name") ||
    !student.hasOwnProperty("age") ||
    !student.hasOwnProperty("course")
  ) {
    return "Invalid";
  }

  return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
}
