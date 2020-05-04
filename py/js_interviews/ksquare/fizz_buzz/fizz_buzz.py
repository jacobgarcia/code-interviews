def fizz_buzz():
    for n in range(100, -1, -1):
        str = ''
        if (n % 3 == 0):
            str += 'Fizz'
        if (n % 5 == 0):
            str += 'Buzz'
        if (str):
            print(str)
