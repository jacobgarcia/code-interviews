const find = (pastFragment, fragment) => {
  for (var i = 0; i < pastFragment.length; i++) {
    if (pastFragment.shift() === fragment) {
      return pastFragment;
    }
  }
};

const decode = str => {
  let decodedStr = "";
  const fragments = str.split(";");

  for (var idx = 1; idx < fragments.length; idx++) {
    const fragment = fragments[idx];
    const pastFragment = Array.from(fragments[idx - 1]);
    pastFragment.reverse();
    const match = find(pastFragment, fragment[0]);
    match.reverse();
    decodedStr = decodedStr.concat(match.join(""));
    if (idx === fragments.length - 1) decodedStr = decodedStr.concat(fragment);
  }

  return decodedStr;
};

module.exports = decode;
