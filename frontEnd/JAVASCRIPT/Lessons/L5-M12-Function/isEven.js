function isEven(number) {
  const result = number % 2;

  if (number % 2 === 0) {
    console.log(" This is a Even Number ", result);
  } else {
    console.log(" This is a Odd Number ");
  }
  return result;
}

const sentNumber = isEven(100);
