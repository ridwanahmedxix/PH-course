let student = {
  name: "Ridwan Ahmed",
  age: 18,
  university: "BUET",
  derperment: "EEE",
};

function objOperation(obj) {
  for (let key in obj) {
    console.log(key);
  }
  for (let key in obj) {
    console.log(obj[key]);
  }
  for (let key in obj) {
    console.log(key, ":", obj[key]);
  }

  let objKeyCount = Object.keys(obj).length;
  console.log("Total Properties :", objKeyCount);

  let hasEmail = obj.hasOwnProperty("email");
  console.log("Has Email :", hasEmail);
}
objOperation(student);
