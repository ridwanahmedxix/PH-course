function fizz(number) {
  if (number % 3 === 0 || number % 5 === 0) {
    return "Fizz";
  } else {
    return number;
  }
}
console.log(fizz(11));
