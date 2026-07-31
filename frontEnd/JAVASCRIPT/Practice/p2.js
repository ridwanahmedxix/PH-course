function calculateAiCost(tokensUsed) {
  if (typeof tokensUsed !== "number" || tokensUsed < 0) {
    return "Invalid";
  }
  if (tokensUsed <= 500) {
    return 0;
  }
  let extraTokens = tokensUsed - 500;
  let extraHundreds = Math.floor(extraTokens / 100);
  let totalCost = extraHundreds * 5;
  return totalCost;
}

console.log(calculateAiCost(620));
