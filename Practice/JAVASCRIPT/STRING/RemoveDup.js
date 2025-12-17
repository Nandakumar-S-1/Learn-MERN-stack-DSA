function removeDupString(str) {
  let seen = {};
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (!seen[str[i]]) {
      seen[str[i]] = true;
      result += str[i];
    }
  }
  return result;
}

console.log(removeDupString("programming")); // "progamin"
