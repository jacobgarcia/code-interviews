money = {
    'PENNY': 0.01,
    'NICKEL': 0.05,
    'DIME': 0.10,
    'QUARTER': 0.25,
    'HALF DOLLAR': 0.50,
    'ONE': 1.00,
    'TWO': 2.00,
    'FIVE': 5.00,
    'TEN': 10.00,
    'TWENTY': 20.00,
    'FIFTY': 50.00,
    'ONE HUNDRED': 100.00
}


def get_change(purchase_price, cash):
    change = round(float(cash) - float(purchase_price), 2)
    money_value = list(money.values())
    money_keys = list(money.keys())
    idx = len(money_value) - 1
    coins = []
    while change != 0 and idx != -1:
        coin = money_value[idx]
        if (change >= coin):
            change = round(change - coin, 2)
            coins.append(money_keys[idx])
        else:
            idx -= 1
    return coins


def transaction(str):
    [purchase_price, cash] = str.split(';')
    return get_change(purchase_price, cash)
