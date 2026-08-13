function bonusScore(scores) {
  if (!Array.isArray(scores) || scores.length === 0) {
    return "Invalid";
  }
  if (!scores.every((score) => typeof score === "number")) {
    return "Invalid";
  }

  // const updateScore = scores.map((score) => score + 10);
  // const total = scores.reduce((sum, score) => sum + score, 0);
  return total;
}

console.log(bonusScore([80, 65, 90, 75]));
