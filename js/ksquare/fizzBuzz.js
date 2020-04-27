const fizzBuzz = () => {
  const numbers = Array.from(Array(100).keys()).reverse();
  numbers.pop();

  numbers.map(number => {
    let str = "";
    if (number % 3 === 0) str += "Fizz";
    if (number % 5 === 0) str += "Buzz";
    if (str) console.log(str);
  });
};

module.exports = fizzBuzz;
