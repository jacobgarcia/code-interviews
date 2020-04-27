const calculateSteps = n => {
  if (n === 1) return 1;
  if (n === 2) return 2;

  return calculateSteps(n - 1) + calculateSteps(n - 2);
};

module.exports = calculateSteps;
