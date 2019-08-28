// First Function
const fizzBuzz = () => {
  for (let i = 100; i > 0; i--) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
};

// Second Function
const omit = (object, ...string) => {
  object = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7 };
  let response = Object.assign({}, object);
  string.map(element => {
    delete response[element];
  });
  return response;
};

fizzBuzz();
console.log(omit({ a: 1 }, "g", "a", "c"));
