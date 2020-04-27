const isBracket = char => {
  const brackets = "()";
  return brackets.indexOf(char) !== -1 ? true : false;
};
const checkBrackets = str => {
  const stack = [];
  for (var i = 0; i < str.length; i++) {
    const char = str[i];
    if (isBracket(char)) {
      if (char === "(") stack.push(char);
      else if (!(stack.pop() === "(" && char === ")")) {
        return false;
      }
    }
  }
  return true;
};

module.exports = checkBrackets;
