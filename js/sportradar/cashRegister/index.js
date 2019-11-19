const coins = [
  {
    name: 'PENNY',
    value: 0.01
  },
  {
    name: 'NICKEL',
    value: 0.05
  },
  {
    name: 'DIME',
    value: 0.10
  },
  {
    name: 'QUARTER',
    value: 0.25
  },
  {
    name: 'HALF DOLLAR',
    value: 0.50
  },
  {
    name: 'ONE',
    value: 1
  },
  {
    name: 'TWO',
    value: 2
  },
  {
    name: 'FIVE',
    value: 5
  },
  {
    name: 'TEN',
    value: 10
  },
  {
    name: 'TWENTY',
    value: 20
  },
  {
    name: 'FIFTY',
    value: 50
  },
  {
    name: 'ONE HUNDRED',
    value: 100
  },
]

const moneyChange = []

const calculateChange = (change, n) => {
  if (change <= 0) return 0

  change = parseFloat(change, 10).toFixed(2);
  for (i = n; i >= 0; i--) {
    if (change >= coins[i].value) {
      change -= coins[i].value;
      moneyChange.push(coins[i].name);
      n = i;
      break;
    }
  }

  return calculateChange(change, n)
}

const transaction = (money) => {
  const [pp, ch] = money.split(';')
  const change = ch - pp
  if (change < 0) return 'ERROR';
  if (change === 0) return 'ZERO';
  calculateChange(change, coins.length - 1);
  return moneyChange.join()
}

console.log(transaction('15.94;16.00'));
