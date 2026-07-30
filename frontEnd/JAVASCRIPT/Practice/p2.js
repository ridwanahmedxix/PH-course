function calculateAiCost(tokensUsed) {
  // যদি number না হয় বা negative হয়
  if (typeof tokensUsed !== "number" || tokensUsed < 0) {
    return "Invalid";
  }

  // যদি 500 বা তার কম token ব্যবহার করে
  if (tokensUsed <= 500) {
    return 0;
  }

  // 500 free token বাদ দিলাম
  let extraTokens = tokensUsed - 500;

  // কতগুলো 100 token সম্পূর্ণ হয়েছে
  let extraHundreds = Math.floor(extraTokens / 100);

  // প্রতি 100 token = 5 টাকা
  let totalCost = extraHundreds * 5;

  return totalCost;
}

console.log(calculateAiCost(620));
