const maxSequence = (numbers) => {
  const allPositives = () => numbers.every(n => n > 0);
  const allNegatives = () => numbers.every(n => n < 0);

  if (numbers.length === 0 || allNegatives(numbers)) return 0;

  const temp = {
    start: 0,
    sum: 0
  };

  let result = {
    start: 0,
    end: 0,
    sum: 0
  };

  for (let i = 0; i < numbers.length; i++) {
    temp.sum += numbers[i];

    if (temp.sum > result.sum) {
      result = {
        start: temp.start,
        end: i,
        sum: temp.sum
      }
    }

    if (temp.sum < 0) {
      temp.sum = 0;
      temp.start = i + 1;
    }
  }

  return result.sum;
}

const calculateMaxSequence = (stringNumbers) => {
  const arrayNumbers = stringNumbers.split(',')
  const numbers = arrayNumbers.map((number) => +number)
  return maxSequence(numbers)
}
