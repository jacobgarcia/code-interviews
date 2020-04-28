const { printSequentually, createBase, counter } = require("./index");
const main = () => {
  printSequentually();
  var addSix = createBase(6);
  console.log(addSix(10)); // returns 16
  addSix(21); // returns 27
  // usage of our counter function
  var c = counter();
  c.add(5);
  c.add(9);

  console.log(c.retrieve());
};

main();
