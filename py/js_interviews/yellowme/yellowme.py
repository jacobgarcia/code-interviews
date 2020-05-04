def is_parenthesis(char):
    parenthesis = '()'
    try:
        parenthesis.index(char)
        return True
    except ValueError:
        pass
        return False


def check_brackets(str):
    stack = []
    for char in str:
        if is_parenthesis(char):
            top = None
            if char == '(':
                stack.append(char)
            else:
                try:
                    top = stack.pop()
                except IndexError:
                    pass
                if not top == '(':
                    return False
    return True
