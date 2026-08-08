/*
  Problem 1: Add Grade to Each Student (Without Changing Original)
  
  You have an array of student objects, each with name and marks.
  Create a NEW array where every student also has a "grade" field,
  based on their marks. The ORIGINAL array must stay exactly the same.

  Grading rule:
    marks >= 90 -> "A+"
    marks >= 80 -> "A"
    marks >= 60 -> "B"
    below 60    -> "Fail"

  Input:
    [
      { name: "Rafi", marks: 85 },
      { name: "Karim", marks: 45 }
    ]

  Output (new array):
    [
      { name: "Rafi", marks: 85, grade: "A" },
      { name: "Karim", marks: 45, grade: "Fail" }
    ]

  Original array must remain untouched (no "grade" field added to it).
*/

const addGrade = (students) => {
  const students2 = [...students];

  console.log(students2);
};

let students = [
  { name: "Rafi", marks: 85, grade: "A" },
  { name: "Karim", marks: 45, grade: "Fail" },
];

console.log(addGrade(students));
