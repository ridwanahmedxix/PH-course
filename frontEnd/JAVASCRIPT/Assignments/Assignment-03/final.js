function studentIntroduction(student) {
  if (typeof student !== "object" || student === null) {
    return "Invalid";
  }

  if (
    !student.hasOwnProperty("name") ||
    !student.hasOwnProperty("age") ||
    !student.hasOwnProperty("course")
  ) {
    return "Invalid";
  }

  return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
}

function filterActiveUsers(users) {
  if (!Array.isArray(users) || users.length === 0) {
    return "Invalid";
  }

  if (users.some((user) => !user.hasOwnProperty("isActive"))) {
    return "Invalid";
  }
  return users.filter((user) => user.isActive === true);
}

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
    hashtagCount: hashTagCount,
    longestTag: longestHashTag,
  };
}
