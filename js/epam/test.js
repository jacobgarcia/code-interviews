const isBalanced = require("./epam");

const main = () => {
  console.log(isBalanced("(({}))"));
  console.log(isBalanced("(({))"));
  console.log(isBalanced("[(({}))]"));
};

main();
