// ? Reverse a String

// # Without Function

// const commitment = " I Love Bangladesh ";
// const parts = commitment.split("");
// const reverseParts = parts.reverse();
// const reverseCommitment = reverseParts.join("");

// console.log(reverseCommitment);

// # With Function

function reverseWord(word) {
  let reversedWord = "";

  for (let i = word.length - 1; i >= 0; i--) {
    let letter = word[i];
    reversedWord += letter;
  }

  return reversedWord;
}

console.log(reverseWord("I Love You "));
