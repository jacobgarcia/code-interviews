function isOpenChar(char) {
  var openChars = "({[";
  return openChars.indexOf(char) !== -1 ? true : false;
}

function checkBalance(top, current) {
  return (
    (top === "[" && current === "]") ||
    (top === "(" && current === ")") ||
    (top === "{" && current === "}")
  );
}

const isBalanced = str => {
  var stack = [];
  for (var i = 0; i < str.length; i++) {
    const char = str[i];
    if (isOpenChar(char)) {
      stack.push(char);
    } else {
      if (!checkBalance(stack.pop(), char)) {
        return false;
      }
    }
  }

  return true;
};

module.exports = isBalanced;
