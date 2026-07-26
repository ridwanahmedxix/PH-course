// ? Palindrome Check

// # Without Function

// let str = "madam";
// let reverseStr = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   let letter = str[i];
//   reverseStr += letter;
// }

// console.log(reverseStr);

// if (str === reverseStr) {
//   console.log("Palindrome");
// } else {
//   console.log(" Not Palindrome");
// }

// # With Function

function isPalindrome() {
  let str = "madam";
  let reverseStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    let letter = str[i];
    reverseStr += letter;
  }

  console.log(reverseStr);

  if (str === reverseStr) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("mam"));
