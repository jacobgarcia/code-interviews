const money = [
  {
    name: "PENNY",
    value: 0.01
  },
  {
    name: "NICKEL",
    value: 0.05
  },
  {
    name: "DIME",
    value: 0.1
  },
  {
    name: "QUARTER",
    value: 0.25
  },
  {
    name: "HALF DOLLAR",
    value: 0.5
  },
  {
    name: "ONE",
    value: 1.0
  },
  {
    name: "TWO",
    value: 2.0
  },
  {
    name: "FIVE",
    value: 5.0
  },
  {
    name: "TEN",
    value: 10.0
  },
  {
    name: "TWENTY",
    value: 20.0
  },
  {
    name: "FIFTY",
    value: 50.0
  },
  {
    name: "ONE HUNDRED",
    value: 100.0
  }
];

const transaction = input => {
  const [price, cash] = input.split(";");
  let change = Number(cash - price).toFixed(2);

  if (change < 0) return "ERROR";
  if (change === 0) return "ZERO";

  const coinChange = [];

  let idx = money.length - 1;
  while (change !== 0 && idx >= 0) {
    const coin = money[idx];
    if (change >= coin.value) {
      coinChange.push(coin.name);
      change = Number(change - coin.value).toFixed(2);
    } else {
      idx--;
    }
  }

  return coinChange;
};

module.exports = transaction;
