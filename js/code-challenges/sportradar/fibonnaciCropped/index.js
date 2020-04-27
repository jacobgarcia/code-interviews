const fibonnaciCropped = n => {
  const numbers = Array.from(Array(n).keys());
  const filteredNumbers = numbers.filter(
    number => !(number % 5 === 0 || number % 7 === 0)
  );
  return filteredNumbers.reduce((a, b) => a + b);
};

module.exports = fibonnaciCropped;
