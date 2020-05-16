process.stdin.resume();
process.stdin.setEncoding("ascii");
let input = "";

const lex = "sxocqnmwpfyheljrdgui";
const foo = "udxsmpf";

const numbers = [];
const lexicalMap = {};

const prototype = Array.prototype;
const max = lex.length + 2;

let response = {
  prepositions: 0,
  verbs: {
    regulars: 0,
    subjunctives: 0
  },
  numbers: {
    regulars: 0,
    pretties: 0
  }
};

isPreposition = word => {
  if (
    word.length === 6 &&
    foo.includes(word[word.length - 1]) &&
    !word.includes("u")
  )
    return true;
  return false;
};

isVerb = word => {
  let response = {
    verb: false,
    subjunctive: false
  };
  if (
    word.length >= 6 &&
    !foo.includes(word[word.length - 1]) &&
    !foo.includes(word[0])
  ) {
    response.subjunctive = true;
    response.verb = true;
  } else if (word.length >= 6 && !foo.includes(word[word.length - 1]))
    response.verb = true;
  return response;
};

isPretty = number => {
  if (number >= 81827 && number % 3 === 0) return true;
  return false;
};

decryptNumber = cryptedNumber => {
  const decryptedNumbers = [];
  cryptedNumber.split("").map((char, index) => {
    decryptedNumbers.push((lexicalMap[char] - 1) * Math.pow(20, index));
  });

  return decryptedNumbers.reduce(($0, $1) => {
    return $0 + $1;
  });
};

customSort = () => {
  compareChars = ($0, $1) => {
    const leftIndex = lexicalMap[$0] || max;
    const rightIndex = lexicalMap[$1] || max;

    return leftIndex - rightIndex;
  };

  compareStrings = ($0, $1) => {
    const minLength = Math.min($0.length, $1.length);
    const result = prototype.reduce.call(
      $0.substring(0, minLength),
      (prev, _, i) => {
        return prev || compareChars($0[i], $1[i]);
      },
      0
    );
    return result || $0.length - $1.length;
  };

  return compareStrings;
};

decrypt = word => {
  if (isPreposition(word)) response.prepositions += 1;
  if (isVerb(word).verb) response.verbs.regulars += 1;
  if (isVerb(word).subjunctive) response.verbs.subjunctives += 1;
  numbers.push(decryptNumber(word));
};

process.stdin.on("data", chunk => {
  input += chunk;
});

process.stdin.on("end", () => {
  // now we can read/parse input
  const text = input.split(" ");
  main(text);
});

main = text => {
  text.map(word => decrypt(word));

  const vocabulary = [...new Set(text)];
  const nonDuplicated = [...new Set(numbers)];

  nonDuplicated.map(number => {
    if (isPretty(number)) response.numbers.pretties += 1;
    response.numbers.regulars += 1;
  });

  console.log(`1) There are ${response.prepositions} prepositions in the text`);
  console.log(`2) There are ${response.verbs.regulars} verbs in the text`);
  console.log(
    `3) There are ${response.verbs.subjunctives} subjunctive verbs in the text`
  );
  console.log(`4) Vocabulary list: ${vocabulary.sort(customSort()).join(" ")}`);
  console.log(
    `5) There are ${response.numbers.pretties} distinct pretty numbers in the text`
  );
};
