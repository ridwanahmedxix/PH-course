// ? Count Vowel

// * A E I O U

let str = "Bangladesh";
let vowel = "aeiou";
let count = 0;
for (let i = 0; i < str.length; i++) {
  let letter = str[i];
  if (letter.includes(letter)) {
    console.log("Vowel", letter);
    count++;
  }
}

console.log(count);
