const arraySum = arr => {
  const flattenArray = arr.flat(Infinity);
  const cleanArray = flattenArray.filter(element => parseFloat(element, 10));
  return cleanArray.reduce((a, b) => parseFloat(a) + parseFloat(b));
};

module.exports = arraySum;
