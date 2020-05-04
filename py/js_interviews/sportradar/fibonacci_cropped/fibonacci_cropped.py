def fibonacci_cropped(n):
    sum = 0
    for number, idx in enumerate(range(n)):
        if not(number % 5 == 0 or number % 7 == 0):
            sum += number

    return sum
