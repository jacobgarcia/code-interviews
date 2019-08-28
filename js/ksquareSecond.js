const arrayToSum = [
1,
2,
"3",
[45, "76", 32, [4, 78, 0, "-45"]],
3,
[
[
true,
false,
23,
45,
[
[[25, 67, 1, -687, 34, [[[[45, 52, 100, [[[33, 25]]]], 0.5]], 3.45]]],
78,
2
]
]
],
[[0.05, "23.3", [45, 32, "B", "2", "45"]], {}]
];

const formatArray = array => {
  return array.map(element => {
    return parseFloat(element, 10) ? parseFloat(element, 10) : 0;
});
};

const flatArray = array => {
  return array.reduce(
    (acc, val) =>
    Array.isArray(val) ? acc.concat(flatArray(val)) : acc.concat(val),
    []
  );
};

const flattenArray = flatArray(arrayToSum);

console.log(formatArray(flattenArray).reduce((acc, val) => acc + val));
