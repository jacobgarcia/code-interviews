const checkBrackets = require("./index");

const main = () => {
  console.log(checkBrackets("( ( a + b ) / 5 – d )")); // true
  console.log(checkBrackets("( ( ) a + b ) / 5 – d )")); // false
  console.log(checkBrackets("( ) ) ( ( a + b ) / 5 – d )")); // false
};

main();
