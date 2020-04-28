const Stack = require("./stack");

const main = () => {
  const stack = new Stack();
  stack.push(3);
  stack.push(9);
  console.log(stack.list());
};

main();
