const fooLetters = ["u", "d", "x", "s", "m", "p", "f"];
const lex = "sxocqnmwpfyheljrdgui";

const lexicalMap = {};

const isPreposition = word => {
  return (
    word.length === 6 &&
    fooLetters.includes(word[word.length - 1]) &&
    !word.includes("u")
  );
};

const isVerb = word => {
  return word.length > 6 && !fooLetters.includes(word[word.length - 1]);
};

const isSubjunctiveVerb = word => {
  return isVerb(word) && !fooLetters.includes(word[0]);
};

const isPretty = number => {
  return number >= 81827 && number % 3 === 0;
};

const decryptNumber = number => {
  return Array.from(number)
    .map((char, index) => {
      return Math.pow(20, index) * char;
    })
    .reduce((a, b) => a + b);
};

const result = {
  prepositions: 0,
  verbs: {
    regulars: 0,
    subjunctives: 0
  },
  numbers: {
    pretties: 0
  }
};

const decrypt = word => {
  if (isPreposition(word)) return (result.prepositions += 1);
  if (isVerb(word)) return (result.verbs.regulars += 1);
  if (isSubjunctiveVerb(word)) return (result.verbs.subjunctives += 1);
};

const analyze = str => {
  const words = str.split(" ");
  const wordsNonDuplicate = [...new Set(words)];

  words.map(word => decrypt(word));
  wordsNonDuplicate.map(word => {
    if (isPretty(decryptNumber(word))) return (result.numbers.pretties += 1);
  });

  console.log(`1) There are ${result.prepositions} prepositions in the text`);
  console.log(`2) There are ${result.verbs.regulars} verbs in the text`);
  console.log(
    `3) There are ${result.verbs.subjunctives} subjunctive verbs in the text`
  );
  console.log(
    `5) There are ${[
      result.numbers.pretties
    ]} distinct pretty numbers in the text`
  );
};

module.exports = analyze;
