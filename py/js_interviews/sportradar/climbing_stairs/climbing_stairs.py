def calculate_steps(n):
    if (n == 1):
        return 1
    if (n == 2):
        return 2

    return calculate_steps(n - 1) + calculate_steps(n - 2)
