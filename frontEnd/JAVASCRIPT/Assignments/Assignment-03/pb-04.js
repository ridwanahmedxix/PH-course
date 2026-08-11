function bonusScore(scores) {
  if (!Array.isArray(scores) || scores.length === 0) {
    return "Invalid";
  }
  if (!scores.every((score) => typeof score === "number")) {
    return "Invalid";
  }
}
