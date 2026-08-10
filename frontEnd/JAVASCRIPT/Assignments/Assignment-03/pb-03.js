function countHashtags(caption) {
  if (typeof caption !== "string") {
    return "Invalid";
  }

  const words = caption.split(" ");

  let hashTagCount = 0;
  let longestHashTag = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith("#")) {
      hashTagCount++;
      const tag = words[i].slice(1);

      if (tag.length > longestHashTag.length) {
        longestHashTag = tag;
      }
    }
  }

  return {
    hashTagCount: hashTagCount,
    longestHashTag: longestHashTag,
  };
}
console.log(countHashtags("Loving this weather today #sunny #vibes #weekend"));
