def is_open_char(char):
    open_chars = '({['
    try:
        open_chars.index(char)
        return True
    except ValueError:
        return False


def match(top, char):
    return (
        (top == '(' and char == ')') or
        (top == '{' and char == '}') or
        (top == '[' and char == ']')
    )


def is_balanced(str):
    stack = []
    for char in str:
        if is_open_char(char):
            stack.append(char)
        elif not match(stack.pop(), char):
            return False
    return True
