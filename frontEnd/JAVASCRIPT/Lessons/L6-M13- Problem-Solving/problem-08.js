// ?  Count Words

// # Without Function

// let str = "I love you";
// let strSplitArry = str.split(" ").length;
// console.log(strSplitArry);

// # With Function

function countWord(str) {
  let strSplitArry = str.split(" ");
  return strSplitArry.length;
}
console.log(countWord("I Love you"));
