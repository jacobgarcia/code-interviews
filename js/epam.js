function isParanthesis(char) {
    var paranthesis = '(){}[]';
    if (paranthesis.indexOf(char) > -1) {
      return true;
    }
    return false;
}

function isOpenParenthesis(char) {
 var str = '({['
 if (str.indexOf(char) > -1) {
  return true;
 }
 return false;
}

function isMatch(top, char) {
  var par = ')'
  var bra = '}'
  var squ = ']'

  if (par === char && top === '(') {
  return true;
  }

  if (bra === char && top === '{') {
  return true;
  }

  if (squ === char && top === '[') {
  return true;
  }
  return false;
}

function isBalanced(array) {
  var stack = []

  for(var i = 0; i < array.length; i++) {
  if (isParanthesis(array[i])) {
        if (isOpenParenthesis(array[i])) {
          stack.push(array[i]);
        } else {
          if (stack.length === 0) {
            return false;
          }
          var top = stack.pop();
          if (!isMatch(top, array[i])) {
            return false;
          }
        }
      }
  }
  return true;
