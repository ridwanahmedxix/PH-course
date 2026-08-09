function filterActiveUsers(users) {
  if (!Array.isArray(users)) {
    return "Invalid";
  }

  if (users.length === 0) {
    return "Invalid";
  }

  if (users.some((user) => !user.hasOwnProperty("isActive"))) {
    return "Invalid";
  }

  return users.filter((user) => user.isActive === true);
}
