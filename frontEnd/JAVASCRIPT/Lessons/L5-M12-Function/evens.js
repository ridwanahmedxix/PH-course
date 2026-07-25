const numbers = [12, 14, 15, 26, 25, 45, 31];

for (num of numbers) {
  //   console.log(num);
  const evens = [];
  if (num % 2 === 0) {
    console.log("This a even number", num);
    evens.push(num);
  } else {
    console.log("Odd number", num);
  }
}
