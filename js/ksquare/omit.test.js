const omit = require("./omit");

const main = () => {
  const obj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7 };

  console.log(omit(obj, "g"));
  console.log(omit(obj, "g", "a", "c"));
};

main();
