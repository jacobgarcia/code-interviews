const decode = (text) => {
  const fragments = text.split(';')
  return mergeFragments(fragments);
}

const mergeFragments = (fragments) => {
  const findMatchFor = fragments[0];
  let bestMatchIndex = -1;
  let bestMatch = '';

  fragments.map((fragment, index) => {
    const stringToSearch = fragments[index];
    const mergedString = findOverlap(findMatchFor, stringToSearch);
    if (mergedString.length > bestMatch.length) {
      bestMatch = mergedString;
      bestMatchIndex = index;
    }
  })

  fragments.splice(bestMatchIndex, 1);
  if (bestMatch.length > 0) fragments[0] = bestMatch;

  return fragments.length === 1 ? fragments[0] : mergeFragments(fragments);
}

const findOverlap = (fragmentOne, fragmentTwo) => {
  if (fragmentOne.includes(fragmentTwo)) return fragmentOne;

  let phrase = fragmentOne[0];
  [...fragmentOne].forEach((_, index) => {
    if (fragmentTwo.startsWith(phrase)) {
      phrase += fragmentOne[index];
    }
    else {
      phrase = fragmentOne[index];
    }
  })

  if (!fragmentTwo.startsWith(phrase) && phrase.length > 1) phrase = phrase.substring(0, phrase.length - 1);

  const startingPhraseLenght = phrase.length;

  phrase = fragmentOne[fragmentOne.length - 1];
  const reversedFragment = [...fragmentOne].reverse();

  reversedFragment.forEach((_, index) => {
    if (fragmentTwo.endsWith(phrase)) {
      phrase = reversedFragment[index] + phrase;
    }
    else {
      phrase = reversedFragment[index];
    }
  })

  if (!fragmentTwo.endsWith(phrase) && phrase.length > 1) phrase = phrase.substring(1);

  let match = ''
  if (startingPhraseLenght > phrase.length) {
    match = fragmentOne + fragmentTwo.substring(startingPhraseLenght, fragmentTwo.length);
  } else if (phrase.length > startingPhraseLenght) {
    match = fragmentTwo + fragmentOne.substring(phrase.length, fragmentOne.length);
  }

  return match;
}

console.log(decode('O draconia;conian devil!\nOh la;h lame sa;saint!'))
